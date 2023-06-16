import React, {
  FC, useEffect, useState,
} from 'react';
import isEqual from 'lodash/isEqual';

import TestEditor from '../editors/TestEditor/TestEditor';
import { Answers, QuestionsData } from '../editors/TestEditor/types';
import createDefaultQuestionsData from '../editors/TestEditor/createDefaultQuestionsData';

export interface TestValue {
  questions: QuestionsData,
  rightAnswers: Answers,
}

interface IProps {
  value?: TestValue,
  onChange?: (value: TestValue) => void,
}

export const createDefaultTestValue = () => ({
  questions: createDefaultQuestionsData(),
  rightAnswers: {},
});

const TestEditorFormInput: FC<IProps> = (
  {
    value = createDefaultTestValue(),
    onChange,
  },
) => {
  const [test, setTest] = useState<QuestionsData>(value.questions);
  const [rightAnswers, setRightAnswers] = useState<Answers>(value.rightAnswers);
  useEffect(() => {
    setTest(value.questions);
  }, [value.questions]);

  const [newValue, setNewValue] = useState({
    questions: test,
    rightAnswers,
  });

  useEffect(() => {
    const veryNewValue = {
      questions: test,
      rightAnswers,
    };

    if (!isEqual(veryNewValue, newValue)) {
      setNewValue(veryNewValue);
    }
  }, [newValue, rightAnswers, test]);

  useEffect(() => {
    if (onChange) {
      onChange(newValue);
    }
  }, [newValue, onChange]);

  return (
    <TestEditor
      value={test}
      onChange={setTest}
      answers={rightAnswers}
      rightAnswers={rightAnswers}
      onChangeAnswers={setRightAnswers}
    />
  );
};

export default TestEditorFormInput;
