import CommonLayout from 'components/layout/CommonLayout';
import React, {
  FC, useCallback, useEffect, useMemo, useState,
} from 'react';
import { PageHeader } from '@ant-design/pro-components';
import {
  Button, Modal,
  Form, Input,
  message, InputNumber,
} from 'antd';
import type { Rule } from 'rc-field-form/lib/interface';

import ModulesTable from './ModulesTable';
import {
  useCreateModuleMutation,
  useUpdateModuleMutation,
} from '../../../generated/graphql';
import DisciplineSelector from '../../../components/common/DisciplineSelector';

interface ModuleCreationFormValues {
  age: number,
  title: string,
  disciplineId: string | null,
}

interface ModuleEditFormValues {
  id: string,
  title: string,
  age: number,
  disciplineId: string | null,
}

const initialValuesCreation: ModuleCreationFormValues = {
  title: '',
  age: 1,
  disciplineId: null,
};

const requiredRule: Rule[] = [
  {
    required: true,
  },
];

const ageRules: Rule[] = [
  {
    validator: (_, value) => {
      if (value < 1) {
        return Promise.reject(new Error('Возраст должен быть больше 0'));
      }

      if (value > 11) {
        return Promise.reject(new Error('Возраст должен быть меньше 11'));
      }

      return Promise.resolve();
    },
  },
  ...requiredRule,
];

const ModulesPage: FC = () => {
  const [isCreationModalOpen, setIsCreationModalOpen] = useState(false);
  const [
    moduleToEdit,
    setModuleToEdit,
  ] = useState<ModuleEditFormValues>({
    id: '',
    title: '',
    disciplineId: null,
    age: 1,
  });
  const [isEditionModalOpen, setIsEditionModalOpen] = useState(false);

  const goToCreation = useCallback(() => {
    setIsCreationModalOpen(true);
  }, []);

  const extra = useMemo(() => (
    <Button onClick={goToCreation} type="primary">
      Создать новый модуль
    </Button>
  ), [goToCreation]);

  const [key, setKey] = useState(new Date().getTime());
  const [createModuleMutation, { loading: createLoading }] = useCreateModuleMutation();
  const [updateModuleMutation, { loading: updateLoading }] = useUpdateModuleMutation();

  const handleCancelCreate = useCallback(() => {
    setIsCreationModalOpen(false);
  }, []);

  const handleCancelEdit = useCallback(() => {
    setIsEditionModalOpen(false);
  }, []);

  const onUpdateModuleFormSubmit = useCallback(async (values: ModuleEditFormValues) => {
    const res = await updateModuleMutation({
      variables: {
        id: values.id,
        data: {
          title: values.title,
          discipline: values.disciplineId,
          age: values.age,
        },
      },
    });

    if (res.data) {
      message.success('Модуль сохранён');
      setIsEditionModalOpen(false);
    } else {
      message.error('Ошибка');
    }

    setKey(new Date().getTime());
  }, [updateModuleMutation]);

  const onCreateModuleFormSubmit = useCallback(async (values: ModuleCreationFormValues) => {
    const res = await createModuleMutation({
      variables: {
        data: {
          title: values.title,
          discipline: values.disciplineId,
          age: values.age,
        },
      },
    });

    if (res.data) {
      message.success('Модуль создан');
      setIsCreationModalOpen(false);
    } else {
      message.error('Ошибка');
    }

    setKey(new Date().getTime());
  }, [createModuleMutation]);

  const [creationForm] = Form.useForm<ModuleCreationFormValues>();
  const [editForm] = Form.useForm<ModuleEditFormValues>();

  useEffect(() => {
    if (!isCreationModalOpen) {
      creationForm.resetFields(['title', 'disciplineId']);
    }
  }, [creationForm, isCreationModalOpen]);

  useEffect(() => {
    if (moduleToEdit) {
      editForm.setFieldsValue(moduleToEdit);
    }
  }, [editForm, moduleToEdit]);

  const goToEdit = useCallback((disciplineToEditValues: ModuleEditFormValues) => {
    setIsEditionModalOpen(true);
    setModuleToEdit(disciplineToEditValues);
  }, []);

  return (
    <CommonLayout>
      <PageHeader
        title="Модули"
        extra={extra}
      />
      <div className="pl-6 pr-6 pb-6">
        <Modal
          title="Создание модуля"
          open={isCreationModalOpen}
          onOk={creationForm.submit}
          onCancel={handleCancelCreate}
          confirmLoading={createLoading}
        >
          <Form
            layout="vertical"
            initialValues={initialValuesCreation}
            form={creationForm}
            onFinish={onCreateModuleFormSubmit}
          >
            <Form.Item label="Название" name="title" required rules={requiredRule}>
              <Input />
            </Form.Item>
            <Form.Item label="Возрастная группа" name="age" rules={ageRules} required>
              <InputNumber min={1} max={11} />
            </Form.Item>
            <Form.Item label="Дисциплина" name="disciplineId" required rules={requiredRule}>
              <DisciplineSelector />
            </Form.Item>
          </Form>
        </Modal>

        <Modal
          title="Редактирование модуля"
          open={isEditionModalOpen}
          onOk={editForm.submit}
          onCancel={handleCancelEdit}
          confirmLoading={updateLoading}
        >
          <Form
            layout="vertical"
            initialValues={moduleToEdit}
            form={editForm}
            onFinish={onUpdateModuleFormSubmit}
          >
            <Form.Item name="id" label="ID">
              <Input disabled />
            </Form.Item>
            <Form.Item label="Название" name="title" required rules={requiredRule}>
              <Input />
            </Form.Item>
            <Form.Item label="Возрастная группа" name="age" rules={ageRules} required>
              <InputNumber min={1} max={11} />
            </Form.Item>
            <Form.Item label="Дисциплина" name="disciplineId" required rules={requiredRule}>
              <DisciplineSelector />
            </Form.Item>
          </Form>
        </Modal>

        <ModulesTable
          onRowClick={goToEdit}
          key={key}
        />
      </div>
    </CommonLayout>
  );
};

export default ModulesPage;
