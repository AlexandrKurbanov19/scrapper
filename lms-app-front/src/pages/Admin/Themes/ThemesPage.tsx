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
import ThemesTable from './ThemesTable';
import { useCreateThemeMutation, useUpdateThemeMutation } from '../../../generated/graphql';

interface ThemeCreationFormValues {
  title: string,
}

interface ThemeEditFormValues {
  id: string,
  title: string,
}

const initialValuesCreation: ThemeCreationFormValues = {
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

const ThemesPage: FC = () => {
  const [isCreationModalOpen, setIsCreationModalOpen] = useState(false);
  const [
    themeToEdit,
    setThemeToEdit,
  ] = useState<ThemeEditFormValues>({ id: '', title: '' });
  const [isEditionModalOpen, setIsEditionModalOpen] = useState(false);

  const goToCreation = useCallback(() => {
    setIsCreationModalOpen(true);
  }, []);

  const extra = useMemo(() => (
    <Button onClick={goToCreation} type="primary">
      Создать новую тему
    </Button>
  ), [goToCreation]);

  const [key, setKey] = useState(new Date().getTime());
  const [createThemeMutation, { loading: createLoading }] = useCreateThemeMutation();
  const [updateThemeMutation, { loading: updateLoading }] = useUpdateThemeMutation();

  const handleCancelCreate = useCallback(() => {
    setIsCreationModalOpen(false);
  }, []);

  const handleCancelEdit = useCallback(() => {
    setIsEditionModalOpen(false);
  }, []);

  const onUpdateThemeFormSubmit = useCallback(async (values: ThemeEditFormValues) => {
    const res = await updateThemeMutation({
      variables: {
        id: values.id,
        data: {
          title: values.title,
        },
      },
    });

    if (res.data) {
      message.success('Тема сохранена');
      setIsEditionModalOpen(false);
    } else {
      message.error('Ошибка');
    }

    setKey(new Date().getTime());
  }, [updateThemeMutation]);

  const onCreateThemeFormSubmit = useCallback(async (values: ThemeCreationFormValues) => {
    const res = await createThemeMutation({
      variables: {
        data: {
          title: values.title,
        },
      },
    });

    if (res.data) {
      message.success('Тема создана');
      setIsCreationModalOpen(false);
    } else {
      message.error('Ошибка');
    }

    setKey(new Date().getTime());
  }, [createThemeMutation]);

  const [creationForm] = Form.useForm<ThemeCreationFormValues>();
  const [editForm] = Form.useForm<ThemeEditFormValues>();

  useEffect(() => {
    if (!isCreationModalOpen) {
      creationForm.resetFields(['title']);
    }
  }, [creationForm, isCreationModalOpen]);

  useEffect(() => {
    if (themeToEdit) {
      editForm.setFieldsValue(themeToEdit);
    }
  }, [editForm, themeToEdit]);

  const goToEdit = useCallback((themeToEditValues: ThemeEditFormValues) => {
    setIsEditionModalOpen(true);
    setThemeToEdit(themeToEditValues);
  }, []);

  return (
    <CommonLayout>
      <PageHeader
        title="Темы"
        extra={extra}
      />
      <div className="pl-6 pr-6 pb-6">
        <Modal
          title="Создание темы"
          open={isCreationModalOpen}
          onOk={creationForm.submit}
          onCancel={handleCancelCreate}
          confirmLoading={createLoading}
        >
          <Form
            labelCol={labelCol}
            initialValues={initialValuesCreation}
            form={creationForm}
            onFinish={onCreateThemeFormSubmit}
          >
            <Form.Item label="Название" name="title" required rules={requiredRule}>
              <Input />
            </Form.Item>
          </Form>
        </Modal>

        <Modal
          title="Редактирование темы"
          open={isEditionModalOpen}
          onOk={editForm.submit}
          onCancel={handleCancelEdit}
          confirmLoading={updateLoading}
        >
          <Form
            preserve={false}
            labelCol={labelCol}
            initialValues={themeToEdit}
            form={editForm}
            onFinish={onUpdateThemeFormSubmit}
          >
            <Form.Item name="id" label="ID">
              <Input disabled />
            </Form.Item>
            <Form.Item label="Название" name="title" required rules={requiredRule}>
              <Input />
            </Form.Item>
          </Form>
        </Modal>

        <ThemesTable
          onRowClick={goToEdit}
          key={key}
        />
      </div>
    </CommonLayout>
  );
};

export default ThemesPage;
