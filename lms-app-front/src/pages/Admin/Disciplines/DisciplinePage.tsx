import CommonLayout from 'components/layout/CommonLayout';
import React, {
  FC, useCallback, useEffect, useMemo, useState,
} from 'react';
import { PageHeader } from '@ant-design/pro-components';
import {
  Button, Modal,
  Form, Input,
  message,
} from 'antd';
import type { Rule } from 'rc-field-form/lib/interface';
import DisciplinesTable from './DisciplinesTable';
import { useCreateDisciplineMutation, useUpdateDisciplineMutation } from '../../../generated/graphql';

interface DisciplineCreationFormValues {
  title: string,
}

interface DisciplineEditFormValues {
  id: string,
  title: string,
}

const initialValuesCreation: DisciplineCreationFormValues = {
  title: '',
};

const labelCol = {
  span: 6,
};

const requiredRule: Rule[] = [
  {
    required: true,
  },
];

const DisciplinePage: FC = () => {
  const [isCreationModalOpen, setIsCreationModalOpen] = useState(false);
  const [
    disciplineToEdit,
    setDisciplineToEdit,
  ] = useState<DisciplineEditFormValues>({ id: '', title: '' });
  const [isEditionModalOpen, setIsEditionModalOpen] = useState(false);

  const goToCreation = useCallback(() => {
    setIsCreationModalOpen(true);
  }, []);

  const extra = useMemo(() => (
    <Button onClick={goToCreation} type="primary">
      Создать новую дисциплину
    </Button>
  ), [goToCreation]);

  const [key, setKey] = useState(new Date().getTime());
  const [createDisciplineMutation, { loading: createLoading }] = useCreateDisciplineMutation();
  const [updateDisciplineMutation, { loading: updateLoading }] = useUpdateDisciplineMutation();

  const handleCancelCreate = useCallback(() => {
    setIsCreationModalOpen(false);
  }, []);

  const handleCancelEdit = useCallback(() => {
    setIsEditionModalOpen(false);
  }, []);

  const onUpdateDisciplineFormSubmit = useCallback(async (values: DisciplineEditFormValues) => {
    const res = await updateDisciplineMutation({
      variables: {
        id: values.id,
        data: {
          title: values.title,
        },
      },
    });

    if (res.data) {
      message.success('Дисциплина сохранена');
      setIsEditionModalOpen(false);
    } else {
      message.error('Ошибка');
    }

    setKey(new Date().getTime());
  }, [updateDisciplineMutation]);

  const onCreateDisciplineFormSubmit = useCallback(async (values: DisciplineCreationFormValues) => {
    const res = await createDisciplineMutation({
      variables: {
        data: {
          title: values.title,
        },
      },
    });

    if (res.data) {
      message.success('Дисциплина создана');
      setIsCreationModalOpen(false);
    } else {
      message.error('Ошибка');
    }

    setKey(new Date().getTime());
  }, [createDisciplineMutation]);

  const [creationForm] = Form.useForm<DisciplineCreationFormValues>();
  const [editForm] = Form.useForm<DisciplineEditFormValues>();

  useEffect(() => {
    if (!isCreationModalOpen) {
      creationForm.resetFields(['title']);
    }
  }, [creationForm, isCreationModalOpen]);

  useEffect(() => {
    if (disciplineToEdit) {
      editForm.setFieldsValue(disciplineToEdit);
    }
  }, [editForm, disciplineToEdit]);

  const goToEdit = useCallback((disciplineToEditValues: DisciplineEditFormValues) => {
    setIsEditionModalOpen(true);
    setDisciplineToEdit(disciplineToEditValues);
  }, []);

  return (
    <CommonLayout>
      <PageHeader
        title="Дисциплины"
        extra={extra}
      />
      <div className="pl-6 pr-6 pb-6">
        <Modal
          title="Создание дисциплины"
          open={isCreationModalOpen}
          onOk={creationForm.submit}
          onCancel={handleCancelCreate}
          confirmLoading={createLoading}
        >
          <Form
            labelCol={labelCol}
            initialValues={initialValuesCreation}
            form={creationForm}
            onFinish={onCreateDisciplineFormSubmit}
          >
            <Form.Item label="Название" name="title" required rules={requiredRule}>
              <Input />
            </Form.Item>
          </Form>
        </Modal>

        <Modal
          title="Редактирование дисциплины"
          open={isEditionModalOpen}
          onOk={editForm.submit}
          onCancel={handleCancelEdit}
          confirmLoading={updateLoading}
        >
          <Form
            preserve={false}
            labelCol={labelCol}
            initialValues={disciplineToEdit}
            form={editForm}
            onFinish={onUpdateDisciplineFormSubmit}
          >
            <Form.Item name="id" label="ID">
              <Input disabled />
            </Form.Item>
            <Form.Item label="Название" name="title" required rules={requiredRule}>
              <Input />
            </Form.Item>
          </Form>
        </Modal>

        <DisciplinesTable
          onRowClick={goToEdit}
          key={key}
        />
      </div>
    </CommonLayout>
  );
};

export default DisciplinePage;
