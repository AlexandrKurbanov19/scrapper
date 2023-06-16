import React, {
  FC, useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { observer } from 'mobx-react-lite';
import {
  DragDropContext, Droppable, DropResult,
} from 'react-beautiful-dnd';

import { debounce, isEqual } from 'lodash';

import {
  OptionsType, Question,
  QuestionsData, Answers, Results,
  Answer,
} from './types';
import QuestionBlock from './includes/QuestionBlock';

interface Props {
  value: QuestionsData
  onChange: (data: QuestionsData | ((current: QuestionsData) => QuestionsData)) => void,
  readOnly?: boolean,
  isChecking?: boolean,
  isEditingResults?: boolean,
  answers?: Answers,
  rightAnswers?: Answers,
  results?: Answers,
  onChangeAnswers?: (answers: Answers | ((current: Answers) => Answers)) => void,
  onChangeResults?: (results: Results | ((current: Results) => Results)) => void,
}

const defaultQuestions: Question[] = [{ id: uuidv4(), type: 'text', isMandatory: true }];

const TestEditor: FC<Props> = (
  {
    value,
    onChange,
    readOnly = false,
    isChecking = false,
    isEditingResults = false,
    answers = {},
    rightAnswers = {},
    results = {},
    onChangeAnswers = () => {
    },
    onChangeResults = () => {
    },
  },
) => {
  const questions = useMemo(() => (value?.questions?.length
    ? value.questions
    : defaultQuestions), [value.questions]);

  const [selectedQuestionId, setSelectedQuestionId] = useState<string>();

  const maxSnapshots = 20;

  const [snapshots, setSnapshots] = useState<QuestionsData[]>([]);

  const createSnapshot = useCallback((snapshot: QuestionsData) => {
    setSnapshots((oldSnapshots) => [
      snapshot,
      ...oldSnapshots.slice(0, maxSnapshots),
    ]);
  }, []);

  const createSnapshotDebounced = useMemo(
    () => debounce(createSnapshot, 5000, { maxWait: 5000 }),
    [createSnapshot],
  );

  const undo = useCallback(() => {
    let [snapshot, ...newSnapshots] = snapshots;
    if (isEqual(snapshot, value)) {
      [snapshot, ...newSnapshots] = newSnapshots;
    }
    if (!snapshot || readOnly) {
      return;
    }
    onChange(snapshot);
    setSnapshots(newSnapshots);
  }, [value, onChange, snapshots, readOnly]);

  useEffect(() => {
    const lastSnapshot = snapshots[0];
    if (!isEqual(lastSnapshot, value) && value.questions.length) {
      createSnapshotDebounced(value);
    }
  }, [value, snapshots, createSnapshotDebounced]);

  const undoCallbackRef = useRef<(e: KeyboardEvent) => void>();
  useEffect(() => {
    if (undoCallbackRef.current) {
      window.removeEventListener('keydown', undoCallbackRef.current);
    }

    function undoCallback(e: KeyboardEvent) {
      if (e.ctrlKey && e.code === 'KeyZ') {
        e.preventDefault();
        undo();
      }
    }

    undoCallbackRef.current = undoCallback;
    window.addEventListener('keydown', undoCallback);
    return () => window.removeEventListener('keydown', undoCallback);
  }, [undo]);

  function updateQuestions(
    questionsUpdater: (questions: Question[]) => Question[],
  ) {
    onChange((d: QuestionsData) => ({
      ...d,
      questions: questionsUpdater(d.questions),
    }));
  }

  function onDragEnd({ destination, source, type }: DropResult) {
    // dropped outside the list
    if (!destination) {
      return;
    }

    updateQuestions((oldQuestions = []) => {
      if (type === 'QUESTIONS') {
        const newQuestions = [...oldQuestions];
        const [removed] = newQuestions.splice(source.index, 1);
        newQuestions.splice(destination.index, 0, removed);

        return newQuestions;
      }
      return oldQuestions?.map((question) => {
        const [questionId, optionsType]: [string, OptionsType] = destination.droppableId.split('_') as any;
        if (question.id !== questionId) {
          return question;
        }
        const newItems = [...question[optionsType as OptionsType] ?? []];
        const destinationIndexClamped = Math.min(destination.index, newItems.length - 1);
        const [removed] = newItems.splice(source.index, 1);
        newItems.splice(destinationIndexClamped, 0, removed);

        return {
          ...question,
          [optionsType]: newItems,
        };
      });
    });
  }

  function onChangeQuestionAtIndex(index: string, update: Partial<Question>) {
    updateQuestions((oldQuestions) => (
      oldQuestions.map((q) => (
        q.id === index
          ? ({ ...q, ...update })
          : q
      ))
    ));
  }

  function addQuestion(index: number) {
    updateQuestions((oldQuestions) => {
      const questionsUpdated = [...oldQuestions];
      questionsUpdated.splice(index + 1, 0, { id: uuidv4(), type: 'text', isMandatory: true });
      return questionsUpdated;
    });
  }

  function deleteQuestion(index: string) {
    updateQuestions((oldQuestions) => oldQuestions.filter((e) => (e.id !== index)));
  }

  function duplicateQuestion(index: number) {
    updateQuestions((oldQuestions) => {
      const questionsUpdated = [...oldQuestions];
      const question = {
        ...oldQuestions[index],
        id: uuidv4(),
      };
      questionsUpdated.splice(index + 1, 0, question);
      return questionsUpdated;
    });
  }

  function onChangeAnswerForQuestion(questionId: string, answer: Answer) {
    onChangeAnswers((oldAnswers) => ({
      ...oldAnswers,
      [questionId]: answer,
    }));
  }

  function onChangeResultForQuestion(questionId: string, result: boolean) {
    onChangeResults((oldResults) => ({
      ...oldResults,
      [questionId]: result,
    }));
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable" type="QUESTIONS">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {questions.map((question, index) => {
              function onChangeQuestion(update: Partial<Question>) {
                onChangeQuestionAtIndex(question?.id, update);
              }

              function onChangeAnswer(answer: Answer) {
                onChangeAnswerForQuestion(question?.id, answer);
              }

              function onChangeResult(result: boolean) {
                onChangeResultForQuestion(question?.id, result);
              }

              const isSelected = selectedQuestionId === question?.id;

              return (
                <QuestionBlock
                  key={question?.id}
                  question={question}
                  isSelected={isSelected}
                  readOnly={readOnly}
                  isChecking={isChecking}
                  isEditingResults={isEditingResults}
                  index={index}
                  answer={answers[question?.id]}
                  rightAnswer={
                    rightAnswers
                      ? rightAnswers[question?.id]
                      : undefined
                  }
                  result={
                    results
                      ? results[question?.id]
                      : undefined
                  }
                  onChangeResult={onChangeResult}
                  onChangeAnswer={onChangeAnswer}
                  onChange={onChangeQuestion}
                  onClick={() => {
                    setSelectedQuestionId(question?.id);
                  }}
                  onClickAdd={() => addQuestion(index)}
                  onClickDelete={() => deleteQuestion(question?.id)}
                  onClickDuplicate={() => duplicateQuestion(index)}
                />
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default observer(TestEditor);
