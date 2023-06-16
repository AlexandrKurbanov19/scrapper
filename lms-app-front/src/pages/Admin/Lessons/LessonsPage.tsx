import CommonLayout from 'components/layout/CommonLayout';
import React, {
  FC, useCallback, useMemo,
} from 'react';
import { PageHeader } from '@ant-design/pro-components';
import {
  Button,
} from 'antd';
import { useNavigate } from 'react-router-dom';

import LessonsTable from './LessonsTable';
import { makeLessonPath } from '../../../routes';

interface LessonEditFormValues {
  id: string,
}

const LessonsPage: FC = () => {
  const navigate = useNavigate();

  const goToCreation = useCallback(() => {
    navigate(makeLessonPath('new'));
  }, [navigate]);

  const extra = useMemo(() => (
    <Button onClick={goToCreation} type="primary">
      Создать новый урок
    </Button>
  ), [goToCreation]);

  const goToEdit = useCallback((lessonToEditValues: LessonEditFormValues) => {
    navigate(makeLessonPath(lessonToEditValues.id));
  }, [navigate]);

  return (
    <CommonLayout>
      <PageHeader
        title="Уроки"
        extra={extra}
      />
      <div className="pl-6 pr-6 pb-6">
        <LessonsTable
          onRowClick={goToEdit}
        />
      </div>
    </CommonLayout>
  );
};

export default LessonsPage;
