import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { Spin } from 'antd';

import LessonCreationPage from './LessonCreationPage';
import LessonEditPage from './LessonEditPage';
import { LESSONS } from '../../../routes';

const LessonPage: FC = () => {
  const { lessonId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (!lessonId) {
      navigate(LESSONS);
    }
  }, [navigate, lessonId]);

  if (!lessonId) {
    return <Spin />;
  }

  if (lessonId === 'new') {
    return <LessonCreationPage />;
  }

  return <LessonEditPage lessonId={lessonId} />;
};

export default LessonPage;
