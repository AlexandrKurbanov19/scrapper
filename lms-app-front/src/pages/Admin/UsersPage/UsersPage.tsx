import CommonLayout from 'components/layout/CommonLayout';
import React, {
  FC, useCallback, useMemo, useState,
} from 'react';
import { PageHeader } from '@ant-design/pro-components';
import { useNavigate } from 'react-router-dom';
import { Button, Tabs } from 'antd';
import type { TabsProps } from 'antd';

import StudentsTable from './includes/tables/StudentsTable';
import ParentsTable from './includes/tables/ParentsTable';
import { makeParentPath, makeStudentPath } from '../../../routes';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Ученики',
    children: <StudentsTable />,
  },
  {
    key: '2',
    label: 'Родители',
    children: <ParentsTable />,
  },
  {
    key: '3',
    label: 'Учителя',
    children: 'Не реализовано',
  },
  {
    key: '4',
    label: 'Тьюторы',
    children: 'Не реализовано',
  },
  {
    key: '5',
    label: 'Кураторы',
    children: 'Не реализовано',
  },
  {
    key: '6',
    label: 'Администраторы',
    children: 'Не реализовано',
  },
];

const UsersPage: FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('1');

  const goToCreation = useCallback(() => {
    if (activeTab === '1') {
      navigate(makeStudentPath('new'));
    }

    if (activeTab === '2') {
      navigate(makeParentPath('new'));
    }
  }, [navigate, activeTab]);

  const extra = useMemo(() => {
    if (['1', '2'].includes(activeTab)) {
      return (
        <Button onClick={goToCreation} type="primary">
          {activeTab === '1' ? 'Создать нового ученика' : 'Создать нового родителя'}
        </Button>
      );
    }

    return undefined;
  }, [goToCreation, activeTab]);

  return (
    <CommonLayout>
      <PageHeader
        title="Пользователи"
        extra={extra}
      />
      <div className="pl-6 pr-6 pb-6">
        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          items={items}
        />
      </div>
    </CommonLayout>
  );
};

export default UsersPage;
