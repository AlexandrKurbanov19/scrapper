import React, {
  FC, useCallback, useEffect, useMemo,
} from 'react';
import CommonLayout from 'components/layout/CommonLayout';
import {
  Button, Form, FormRule, Input, message,
  Spin, Card, Row, Col, Select, Space, Switch,
} from 'antd';
import { PageHeader } from '@ant-design/pro-components';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import isEqual from 'lodash/isEqual';
import compact from 'lodash/compact';
import type { DefaultOptionType, FilterFunc } from 'rc-select/lib/Select';
import type { Gutter } from 'antd/lib/grid/row';

import { makeParentPath, USERS } from '../../../../../routes';
import {
  Enum_Comment_Subjectcontenttype,
  useGetStudentsToSelectorQuery,
  useGetParentByIdQuery,
  useCreateParentMutation,
  useUpdateParentMutation, useUpdateUserBlockMutation,
} from '../../../../../generated/graphql';
import Comments from '../../../../../components/Comments/Comments';
import AvatarFormInput from '../../../../../components/common/AvatarFormInput/AvatarFormInput';
import { useNavigationLocking } from '../../../../../hooks/blockNavigationHooks';
import UserAvatar from '../../../../../components/UserAvatar';
import UserPasswordReset from '../../../../../components/UserPasswordReset/UserPasswordReset';

const gutter: [Gutter, Gutter] = [16, 16];

type Params = {
  parentId: string;
};

interface ParentFormValues {
  firstname?: string | null,
  lastname?: string | null,
  patronymic?: string | null,
  email: string | null,
  phone?: string | null,
  telegram?: string | null,
  vk?: string | null,
  avatarUrl?: string | null,
  children?: string[] | null,
  blocked: boolean,
}

const emailFieldRules: FormRule[] = [
  {
    type: 'email',
    message: 'Введите действительный email',
  },
  {
    required: true,
    message: 'Обязательно для заполнения',
  },
];

const { Option } = Select;

const ParentPage: FC = () => {
  const { parentId } = useParams<Params>();

  const navigate = useNavigate();

  useEffect(() => {
    if (!parentId) {
      navigate(USERS);
    }
  }, [navigate, parentId]);

  const { data, loading, refetch } = useGetParentByIdQuery(
    {
      variables: { id: parentId || '' },
      skip: parentId === 'new' || !parentId,
      fetchPolicy: 'network-only',
    },
  );

  const { data: dataStudents, loading: studentsLoading } = useGetStudentsToSelectorQuery({
    variables: {
      pagination: {
        pageSize: 100000,
      },
    },
  });

  const isCreateMode = parentId === 'new';

  const parent = parentId !== 'new' ? data?.parent?.data : undefined;

  const userId = data?.parent?.data?.attributes?.user?.data?.id;

  const initialFormValues: ParentFormValues = useMemo(() => ({
    blocked: parent?.attributes?.user?.data?.attributes?.blocked ?? false,
    firstname: parent?.attributes?.firstname || '',
    lastname: parent?.attributes?.lastname || '',
    patronymic: parent?.attributes?.patronymic || '',
    email: parent?.attributes?.email || '',
    phone: parent?.attributes?.phone || '',
    telegram: parent?.attributes?.telegram || '',
    vk: parent?.attributes?.vk || '',
    avatarUrl: parent?.attributes?.avatarUrl || null,
    children: compact(parent?.attributes?.children?.data.map((c) => c.id)) || [],
  }), [parent]);

  const onBack = useCallback(() => {
    navigate(USERS);
  }, [navigate]);

  const [form] = Form.useForm<ParentFormValues>();

  useEffect(() => {
    if (isCreateMode) {
      form.resetFields();
    }
  }, [isCreateMode, form]);

  useEffect(() => {
    form.setFieldsValue(initialFormValues);
  }, [initialFormValues, form]);

  const goToCreation = useCallback(() => {
    navigate(makeParentPath('new'));
  }, [navigate]);

  const extra = useMemo(() => {
    if (!isCreateMode) {
      return (
        <Button type="primary" onClick={goToCreation}>
          Создать нового родителя
        </Button>
      );
    }
    return undefined;
  }, [goToCreation, isCreateMode]);

  const [haveChanges, setHaveChanges] = React.useState(false);

  const onFieldsChange = useCallback(() => {
    const values = form.getFieldsValue();
    const newHaveChanges = !isEqual({
      ...values,
      children: values.children?.sort((a, b) => Number(a) - Number(b)),
    }, {
      ...initialFormValues,
      children: initialFormValues.children?.sort((a, b) => Number(a) - Number(b)),
    });
    setHaveChanges(newHaveChanges);
  }, [initialFormValues, form]);

  useEffect(() => {
    onFieldsChange();
  }, [initialFormValues, onFieldsChange]);

  const [createParent, { loading: createParentLoading }] = useCreateParentMutation({
    onError: (error) => {
      let isEmailUniqError = false;
      if (error.graphQLErrors && error.graphQLErrors.length) {
        error.graphQLErrors.forEach((value) => {
          if (value.extensions.code === 'BAD_USER_INPUT' && value.message === 'This attribute must be unique') {
            isEmailUniqError = true;
          }
        });
      }

      if (isEmailUniqError) {
        message.error('Такой email уже занят другим пользователем');
      } else {
        message.error('Ошибка при сохранении');
      }
    },
    onCompleted: (result) => {
      message.success('Родитель создан');
      const newParentId = result.createParent?.data?.id;
      if (newParentId) {
        form.resetFields();
        setHaveChanges(false);
        setTimeout(() => {
          navigate(makeParentPath(newParentId), { replace: true });
        }, 1000);
      }
    },
  });

  const [updateParent, { loading: updateParentLoading }] = useUpdateParentMutation({
    onError: (error) => {
      let isEmailUniqError = false;
      if (error.graphQLErrors && error.graphQLErrors.length) {
        error.graphQLErrors.forEach((value) => {
          if (value.extensions.code === 'BAD_USER_INPUT' && value.message === 'This attribute must be unique') {
            isEmailUniqError = true;
          }
        });
      }

      if (isEmailUniqError) {
        message.error('Такой email уже занят другим пользователем');
      } else {
        message.error('Ошибка при сохранении');
      }
    },
  });

  const [updateUserBlockMutation, { loading: updateUserBlockLoading }] = useUpdateUserBlockMutation();

  const onAfterUpdate = useCallback(async () => {
    await refetch();
    form.resetFields();
    message.success('Данные родителя сохранены');
  }, [refetch, form]);

  const onFinish = useCallback(async (values: ParentFormValues) => {
    if (isCreateMode) {
      await createParent({
        variables: {
          data: {
            firstname: values.firstname,
            lastname: values.lastname,
            patronymic: values.patronymic,
            email: values.email,
            phone: values.phone,
            telegram: values.telegram,
            vk: values.vk,
            avatarUrl: values.avatarUrl,
            children: values.children,
          },
        },
      });
    } else if (parentId) {
      const res1 = await updateParent({
        variables: {
          id: parentId,
          data: {
            firstname: values.firstname,
            lastname: values.lastname,
            patronymic: values.patronymic,
            email: values.email,
            phone: values.phone,
            telegram: values.telegram,
            vk: values.vk,
            avatarUrl: values.avatarUrl,
            children: values.children,
          },
        },
      });

      let res2;
      if (userId) {
        res2 = await updateUserBlockMutation({
          variables: {
            id: userId,
            blocked: values.blocked,
          },
        });
      }

      const isSuccess = !res1.errors && (!res2 || !res2.errors);

      if (isSuccess) {
        await onAfterUpdate();
      }

      await onAfterUpdate();
    }
  }, [isCreateMode, parentId, createParent, updateParent, userId, onAfterUpdate, updateUserBlockMutation]);

  useNavigationLocking(haveChanges);

  const childrenFilterOption: FilterFunc<DefaultOptionType> = useCallback(
    (input, option) => (option?.name ?? '').includes(input),
    [],
  );

  return (
    <CommonLayout>
      <PageHeader
        title={isCreateMode ? 'Создание родителя' : 'Родитель'}
        onBack={onBack}
        subTitle={parent && `ID ${parent.id}`}
        extra={extra}
      />
      <div className="pl-6 pr-6 pb-6">
        {loading && <Spin />}
        {(isCreateMode || !!parent) && (
          <Form
            key={parentId || 'new'}
            form={form}
            layout="vertical"
            className="w-full"
            initialValues={initialFormValues}
            onFinish={onFinish}
            onFieldsChange={onFieldsChange}
            onReset={onFieldsChange}
          >
            <Row gutter={gutter} className="w-full" wrap>
              <Col xl={8} md={12} xs={24}>
                <Card title="ФИО">
                  <Form.Item label="Фамилия" name="lastname">
                    <Input />
                  </Form.Item>

                  <Form.Item label="Имя" name="firstname">
                    <Input />
                  </Form.Item>

                  <Form.Item label="Отчество" name="patronymic">
                    <Input />
                  </Form.Item>
                </Card>
              </Col>

              <Col xl={8} md={12} xs={24}>
                <Card title="Доступы">
                  <Form.Item label="Заблокирован?" name="blocked" valuePropName="checked">
                    <Switch />
                  </Form.Item>

                  {userId && (
                    <UserPasswordReset
                      userId={userId}
                    />
                  )}
                </Card>
              </Col>

              <Col xl={8} md={12} xs={24}>
                <Card title="Контакты">
                  <Form.Item label="Email" name="email" required rules={emailFieldRules}>
                    <Input />
                  </Form.Item>

                  <Form.Item label="Телефон" name="phone">
                    <Input />
                  </Form.Item>

                  <Form.Item label="telegram" name="telegram">
                    <Input />
                  </Form.Item>

                  <Form.Item label="vk" name="vk">
                    <Input />
                  </Form.Item>
                </Card>
              </Col>

              <Col xl={8} md={12} xs={24}>
                <Card title="Прочее">
                  <Form.Item name="avatarUrl" noStyle>
                    <AvatarFormInput avatarLetter={initialFormValues.lastname?.charAt(0)} />
                  </Form.Item>

                  <Form.Item label="Дети" name="children">
                    <Select
                      size="large"
                      mode="multiple"
                      loading={studentsLoading}
                      placeholder="Выберете детей"
                      optionFilterProp="children"
                      filterOption={childrenFilterOption}
                    >
                      {dataStudents?.students?.data?.map((p) => (
                        <Option
                          key={p.id}
                          value={p.id}
                          name={[
                            p.attributes?.firstname,
                            p.attributes?.lastname,
                            p.attributes?.patronymic,
                          ].filter(Boolean).join(' ')}
                        >
                          <Space>
                            <UserAvatar
                              small
                              user={p?.attributes}
                            />
                            {[
                              p.attributes?.firstname,
                              p.attributes?.lastname,
                              p.attributes?.patronymic,
                            ].filter(Boolean).join(' ')}
                          </Space>
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Card>
              </Col>
            </Row>

            <Button
              className="mt-4"
              size="large"
              htmlType="submit"
              type="primary"
              loading={createParentLoading || updateParentLoading || updateUserBlockLoading}
              disabled={!haveChanges}
            >
              Сохранить
            </Button>
          </Form>
        )}
        {parent && parent.id && (
          <div className="pt-8">
            <Comments
              subjectContentType={Enum_Comment_Subjectcontenttype.Parent}
              subjectContentTypeId={parent.id}
            />
          </div>
        )}
      </div>
    </CommonLayout>
  );
};

export default ParentPage;
