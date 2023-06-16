import React, {
  FC, useCallback, useMemo,
  useState,
} from 'react';
import type { Rule } from 'rc-field-form/lib/interface';
import {
  Form, Input,
  Button, InputNumber,
} from 'antd';
import type { Options } from 'scroll-into-view-if-needed';
import { OutputData } from '@editorjs/editorjs';

import styles from './LessonForm.module.scss';
import TestEditorFormInput, { createDefaultTestValue, TestValue } from '../common/TestEditorFormInput';
import ContentEditorFormInput from '../common/ContentEditorFormInput';
import ModuleSelector from '../common/ModuleSelector';
import ThemeSelector from '../common/ThemeSelector';

const requiredRule: Rule[] = [
  {
    required: true,
  },
];

const contentRule: Rule[] = [
  {
    validator: (_, value?: OutputData) => {
      if (!value) {
        return Promise.reject(new Error('Обязательно для заполнения'));
      }

      if (value.blocks.length === 0) {
        return Promise.reject(new Error('Обязательно для заполнения'));
      }

      return Promise.resolve();
    },
  },
];

export interface LessonFormValues {
  title: string,
  moduleId?: string,
  themeId?: string,
  goalText: string,
  intoLeftContent?: string, // json
  intoRightContent?: string, // json
  theoryContent?: string, // json
  outroContent?: string, // json
  numberOfTestAttemptsForLesson: number,
  testSpoilerText: string,
  lessonTest: TestValue,
  nextLessonSpoiler: string,
  lessonPracticalTask: TestValue,
  practicalTaskDeadlineDaysAfterFinishTest: number,
  lessonKnowledgeConsolidationTask: TestValue,
}

const scrollToFirstError: Options = {
  block: 'center',
};

interface IProps {
  onSubmit: (values: Required<LessonFormValues>) => void;
  initialValues?: Partial<LessonFormValues>,
}

const LessonForm: FC<IProps> = (
  {
    onSubmit,
    initialValues: _initialValues,
  },
) => {
  const [loading, setLoading] = useState(false);

  const initialValues: LessonFormValues = useMemo(() => ({
    lessonTest: createDefaultTestValue(),
    lessonPracticalTask: createDefaultTestValue(),
    lessonKnowledgeConsolidationTask: createDefaultTestValue(),
    title: '',
    goalText: '',
    numberOfTestAttemptsForLesson: 1,
    practicalTaskDeadlineDaysAfterFinishTest: 3,
    testSpoilerText: '',
    nextLessonSpoiler: '',
    ..._initialValues,
  }), [_initialValues]);

  const onFinish = useCallback((values: LessonFormValues) => {
    setLoading(true);
    try {
      onSubmit(values as Required<LessonFormValues>);
    } catch (e) {
      console.error(e);
    }

    setLoading(false);
  }, [onSubmit]);

  return (
    <Form
      disabled={loading}
      scrollToFirstError={scrollToFirstError}
      initialValues={initialValues}
      className={styles.lessonForm}
      layout="vertical"
      onFinish={onFinish}
    >
      <Form.Item
        rules={requiredRule}
        label="Название"
        name="title"
      >
        <Input />
      </Form.Item>
      <Form.Item
        rules={requiredRule}
        label="Модуль"
        name="moduleId"
      >
        <ModuleSelector />
      </Form.Item>
      <Form.Item
        rules={requiredRule}
        label="Тема"
        name="themeId"
      >
        <ThemeSelector />
      </Form.Item>
      <Form.Item
        rules={requiredRule}
        label="Цель урока"
        name="goalText"
      >
        <Input />
      </Form.Item>
      <Form.Item
        rules={contentRule}
        className="z-[20] relative"
        label="Интро (слева)"
        name="intoLeftContent"
      >
        <ContentEditorFormInput />
      </Form.Item>
      <Form.Item
        rules={contentRule}
        className="z-[19] relative"
        label="Интро (справа)"
        name="intoRightContent"
      >
        <ContentEditorFormInput />
      </Form.Item>
      <Form.Item
        rules={requiredRule}
        className="z-[18] relative"
        label="Теория"
        name="theoryContent"
      >
        <ContentEditorFormInput />
      </Form.Item>
      <Form.Item
        rules={requiredRule}
        className="z-[17] relative"
        label="Итоги урока"
        name="outroContent"
      >
        <ContentEditorFormInput />
      </Form.Item>

      <Form.Item
        rules={requiredRule}
        label="Кол-во доступных попыток теста"
        name="numberOfTestAttemptsForLesson"
      >
        <InputNumber min={1} />
      </Form.Item>

      <Form.Item
        rules={requiredRule}
        label="Спойлер следующего теста"
        name="testSpoilerText"
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        rules={requiredRule}
        label="Основное задание (тест)"
        name="lessonTest"
      >
        <TestEditorFormInput />
      </Form.Item>
      <Form.Item
        rules={requiredRule}
        label="Спойлер следующего урока"
        name="nextLessonSpoiler"
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        rules={requiredRule}
        label="Практическое задание (тест)"
        name="lessonPracticalTask"
      >
        <TestEditorFormInput />
      </Form.Item>

      <Form.Item
        rules={requiredRule}
        label="В течении скольки дней необходимо сделать практическое задание"
        name="practicalTaskDeadlineDaysAfterFinishTest"
      >
        <InputNumber min={1} />
      </Form.Item>

      <Form.Item
        rules={requiredRule}
        label="Закрепляющее задание (тест)"
        name="lessonKnowledgeConsolidationTask"
      >
        <TestEditorFormInput />
      </Form.Item>
      <Button htmlType="submit" type="primary" loading={loading}>
        Сохранить
      </Button>
    </Form>
  );
};

export default LessonForm;
