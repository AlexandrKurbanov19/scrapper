import React, { FC, useState } from 'react';
import { OutputData } from '@editorjs/editorjs';
import { Card } from 'antd';
import cn from 'classnames';

import ContentEditor from '../ContentEditor';
import TestEditor from '../TestEditor/TestEditor';
import type { Answers, QuestionsData, Results } from '../TestEditor/types';

import styles from './LessonEditor.module.scss';
import createDefaultQuestionsData from '../TestEditor/createDefaultQuestionsData';

interface IProps {
  readOnly?: boolean,
}

const LessonEditor: FC<IProps> = (
  {
    readOnly = false,
  },
) => {
  const [goals, setGoals] = useState<OutputData | undefined>(undefined);
  const [intro, setIntro] = useState<OutputData | undefined>(undefined);
  const [test, setTest] = useState<QuestionsData>(createDefaultQuestionsData());
  const [answers, setAnswers] = useState<Answers>({});
  const [results, setResults] = useState<Results>(undefined);

  return (
    <div>
      <Card
        title="Целеполагание"
        className={cn([styles.card, styles.card_goals])}
      >
        <ContentEditor
          value={goals}
          onChange={setGoals}
          readOnly={readOnly}
        />
      </Card>
      <Card
        title="Интро"
        className={cn([styles.card, styles.card_into])}
      >
        <ContentEditor
          value={intro}
          onChange={setIntro}
          readOnly={readOnly}
        />
      </Card>
      <Card
        title="Задание"
        className={cn([styles.card, styles.card_test])}
      >
        <TestEditor
          value={test}
          onChange={setTest}
          readOnly={readOnly}
          isChecking={false}
          isEditingResults={false}
          answers={answers}
          rightAnswers={undefined}
          results={results}
          onChangeAnswers={setAnswers}
          onChangeResults={setResults}
        />
      </Card>
    </div>
  );
};

export default LessonEditor;
