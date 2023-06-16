import React, { FC, useCallback } from 'react';
import { PageHeader } from '@ant-design/pro-components';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import LessonForm, { LessonFormValues } from '../../../components/LessonForm/LessonForm';
import CommonLayout from '../../../components/layout/CommonLayout';
import { LESSONS, makeLessonPath } from '../../../routes';
import {
  useCreateLessonKnowledgeConsolidationTaskMutation,
  useCreateLessonMutation, useCreateLessonPracticalTaskMutation,
  useCreateLessonTestMutation,
} from '../../../generated/graphql';

const LessonCreationPage: FC = () => {
  const navigate = useNavigate();

  const goToLessons = useCallback(() => {
    navigate(LESSONS);
  }, [navigate]);

  const [createLesson] = useCreateLessonMutation();
  const [createLessonTestMutation] = useCreateLessonTestMutation();
  const [createLessonPracticalTaskMutation] = useCreateLessonPracticalTaskMutation();
  const [createLessonKnowledgeConsolidationTaskMutation] = useCreateLessonKnowledgeConsolidationTaskMutation();

  const onSubmit = useCallback(async (values: Required<LessonFormValues>) => {
    try {
      const [
        lessonTestCreateResult,
        lessonPracticalTaskCreateResult,
        lessonKnowledgeConsolidationTaskCreateResult,
      ] = await Promise.all([
        createLessonTestMutation({
          variables: {
            data: {
              questions: values.lessonTest.questions,
              rightAnswers: values.lessonTest.rightAnswers,
              testMaxPoints: 10,
            },
          },
        }),
        createLessonPracticalTaskMutation({
          variables: {
            data: {
              questions: values.lessonPracticalTask.questions,
              rightAnswers: values.lessonPracticalTask.rightAnswers,
              deadlineDaysAfterFinishTest: values.practicalTaskDeadlineDaysAfterFinishTest,
              testMaxPoints: 10,
            },
          },
        }),
        createLessonKnowledgeConsolidationTaskMutation({
          variables: {
            data: {
              questions: values.lessonKnowledgeConsolidationTask.questions,
              rightAnswers: values.lessonKnowledgeConsolidationTask.rightAnswers,
              testMaxPoints: 10,
            },
          },
        }),
      ]);

      const lessonTestId = lessonTestCreateResult
        ?.data?.createLessonTest?.data?.id;
      const lessonPracticalTaskId = lessonPracticalTaskCreateResult
        ?.data?.createLessonPracticalTask?.data?.id;
      const lessonKnowledgeConsolidationTaskId = lessonKnowledgeConsolidationTaskCreateResult
        ?.data?.createLessonKnowledgeConsolidationTask?.data?.id;

      if (!lessonTestId || !lessonPracticalTaskId || !lessonKnowledgeConsolidationTaskId) {
        message.error('Ошибка при создании урока');
        return;
      }

      const res = await createLesson({
        variables: {
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
            lessonTest: lessonTestId,
            lessonPracticalTask: lessonPracticalTaskId,
            lessonKnowledgeConsolidationTask: lessonKnowledgeConsolidationTaskId,
          },
        },
      });

      const newLessonId = res.data?.createLesson?.data?.id;

      if (!newLessonId) {
        message.error('Ошибка при создании урока');
      } else {
        message.success('Урок создан!');
        navigate(makeLessonPath(newLessonId));
      }
    } catch (e) {
      console.error(e);
      message.error('Ошибка при создании урока');
    }
  }, [
    createLessonTestMutation,
    createLessonPracticalTaskMutation,
    createLessonKnowledgeConsolidationTaskMutation,
    createLesson,
    navigate,
  ]);

  return (
    <CommonLayout>
      <PageHeader
        title="Создание урока"
        onBack={goToLessons}
      />
      <div className="pl-6 pr-6 pb-6">
        <LessonForm
          onSubmit={onSubmit}
        />
      </div>
    </CommonLayout>
  );
};

export default LessonCreationPage;
