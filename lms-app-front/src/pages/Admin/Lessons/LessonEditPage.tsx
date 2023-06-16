import React, {
  FC, useCallback, useEffect, useMemo, useState,
} from 'react';
import { PageHeader } from '@ant-design/pro-components';
import { useNavigate } from 'react-router-dom';
import { message, Spin } from 'antd';
import LessonForm, { LessonFormValues } from '../../../components/LessonForm/LessonForm';
import CommonLayout from '../../../components/layout/CommonLayout';
import { LESSONS } from '../../../routes';
import {
  useGetLessonByIdQuery,
  useUpdateLessonKnowledgeConsolidationTaskMutation,
  useUpdateLessonMutation,
  useUpdateLessonPracticalTaskMutation,
  useUpdateLessonTestMutation,
} from '../../../generated/graphql';
import createDefaultQuestionsData from '../../../components/editors/TestEditor/createDefaultQuestionsData';

interface IProps {
  lessonId: string;
}

const LessonEditPage: FC<IProps> = (
  {
    lessonId,
  },
) => {
  const navigate = useNavigate();
  const [key, setKey] = useState(new Date().getTime());

  const goToLessons = useCallback(() => {
    navigate(LESSONS);
  }, [navigate]);

  const {
    data,
    refetch,
    loading,
  } = useGetLessonByIdQuery({
    variables: {
      id: lessonId,
    },
  });

  const lesson = data?.lesson?.data;

  const lessonTestId = lesson?.attributes?.lessonTest?.data?.id;
  const lessonPracticalTaskId = lesson?.attributes?.lessonPracticalTask?.data?.id;
  const lessonKnowledgeConsolidationTaskId = lesson?.attributes?.lessonKnowledgeConsolidationTask?.data?.id;

  const [updateLesson] = useUpdateLessonMutation();
  const [updateLessonTestMutation] = useUpdateLessonTestMutation();
  const [updateLessonPracticalTaskMutation] = useUpdateLessonPracticalTaskMutation();
  const [updateLessonKnowledgeConsolidationTaskMutation] = useUpdateLessonKnowledgeConsolidationTaskMutation();

  const onSubmit = useCallback(async (values: Required<LessonFormValues>) => {
    if (!lessonTestId || !lessonPracticalTaskId || !lessonKnowledgeConsolidationTaskId) {
      message.error('Ошибка при создании урока');
      return;
    }

    try {
      await Promise.all([
        updateLessonTestMutation({
          variables: {
            id: lessonTestId,
            data: {
              questions: values.lessonTest.questions,
              rightAnswers: values.lessonTest.rightAnswers,
              testMaxPoints: 10,
            },
          },
        }),
        updateLessonPracticalTaskMutation({
          variables: {
            id: lessonPracticalTaskId,
            data: {
              questions: values.lessonPracticalTask.questions,
              rightAnswers: values.lessonPracticalTask.rightAnswers,
              deadlineDaysAfterFinishTest: values.practicalTaskDeadlineDaysAfterFinishTest,
              testMaxPoints: 10,
            },
          },
        }),
        updateLessonKnowledgeConsolidationTaskMutation({
          variables: {
            id: lessonKnowledgeConsolidationTaskId,
            data: {
              questions: values.lessonKnowledgeConsolidationTask.questions,
              rightAnswers: values.lessonKnowledgeConsolidationTask.rightAnswers,
              testMaxPoints: 10,
            },
          },
        }),
      ]);

      const res = await updateLesson({
        variables: {
          id: lessonId,
          data: {
            title: values.title,
            theme: values.themeId,
            module: values.moduleId,
            goalText: values.goalText,
            intoLeftContent: values.intoLeftContent,
            intoRightContent: values.intoRightContent,
            theoryContent: values.theoryContent,
            outroContent: values.outroContent,
            numberOfTestAttemptsForLesson: values.numberOfTestAttemptsForLesson,
            testSpoilerText: values.testSpoilerText,
            nextLessonSpoiler: values.nextLessonSpoiler,
          },
        },
      });

      const updatedLessonId = res.data?.updateLesson?.data?.id;

      if (!updatedLessonId) {
        message.error('Ошибка при сохранении урока');
      } else {
        await refetch();
        message.success('Урок сохранён!');
        setKey(new Date().getTime());
      }
    } catch (e) {
      console.error(e);
      message.error('Ошибка при создании урока');
    }
  }, [
    lessonTestId,
    lessonPracticalTaskId,
    lessonKnowledgeConsolidationTaskId,
    updateLessonTestMutation,
    updateLessonPracticalTaskMutation,
    updateLessonKnowledgeConsolidationTaskMutation,
    updateLesson,
    lessonId,
    refetch,
  ]);

  const initialValues: Partial<LessonFormValues> = useMemo(() => {
    if (!lesson) {
      return {};
    }

    return ({
      title: lesson.attributes?.title || undefined,
      moduleId: lesson.attributes?.module?.data?.id || undefined,
      themeId: lesson.attributes?.theme?.data?.id || undefined,
      goalText: lesson?.attributes?.goalText || undefined,
      intoLeftContent: lesson?.attributes?.intoLeftContent || undefined,
      intoRightContent: lesson?.attributes?.intoRightContent || undefined,
      theoryContent: lesson?.attributes?.theoryContent || undefined,
      outroContent: lesson?.attributes?.outroContent || undefined,
      numberOfTestAttemptsForLesson: lesson?.attributes?.numberOfTestAttemptsForLesson,
      testSpoilerText: lesson.attributes?.testSpoilerText,
      lessonTest: {
        questions: lesson.attributes?.lessonTest?.data?.attributes?.questions || createDefaultQuestionsData(),
        rightAnswers: lesson.attributes?.lessonTest?.data?.attributes?.rightAnswers || undefined,
      },
      nextLessonSpoiler: lesson.attributes?.nextLessonSpoiler || undefined,
      lessonPracticalTask: {
        questions: lesson.attributes?.lessonPracticalTask?.data?.attributes?.questions || createDefaultQuestionsData(),
        rightAnswers: lesson.attributes?.lessonPracticalTask?.data?.attributes?.rightAnswers || undefined,
      },
      practicalTaskDeadlineDaysAfterFinishTest: lesson.attributes?.lessonPracticalTask
        ?.data?.attributes?.deadlineDaysAfterFinishTest || undefined,
      lessonKnowledgeConsolidationTask: {
        questions: lesson.attributes?.lessonKnowledgeConsolidationTask
          ?.data?.attributes?.questions || createDefaultQuestionsData(),
        rightAnswers: lesson.attributes?.lessonKnowledgeConsolidationTask
          ?.data?.attributes?.rightAnswers || undefined,
      },
    });
  }, [lesson]);

  useEffect(() => {
    setKey(new Date().getTime());
  }, [initialValues]);

  return (
    <CommonLayout>
      <PageHeader
        title={`Редактирование урока ID=${lessonId}`}
        onBack={goToLessons}
      />
      <div className="pl-6 pr-6 pb-6">
        <Spin spinning={loading}>
          <LessonForm
            key={key}
            initialValues={initialValues}
            onSubmit={onSubmit}
          />
        </Spin>
      </div>
    </CommonLayout>
  );
};

export default LessonEditPage;
