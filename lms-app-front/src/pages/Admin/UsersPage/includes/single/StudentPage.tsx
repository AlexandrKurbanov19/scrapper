import React, {
  FC, useCallback, useEffect, useMemo,
} from 'react';
import CommonLayout from 'components/layout/CommonLayout';
import {
  Button, Card,
  Col, Form, FormRule,
  Input, message,
  Row, Select, Space, Spin,
  DatePicker, Switch,
} from 'antd';
import { PageHeader } from '@ant-design/pro-components';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import isEqual from 'lodash/isEqual';
import compact from 'lodash/compact';
import dayjs, { Dayjs } from 'dayjs';
import type { FilterFunc, DefaultOptionType } from 'rc-select/lib/Select';
import type { Gutter } from 'antd/lib/grid/row';

import { makeStudentPath, USERS } from '../../../../../routes';
import {
  Enum_Comment_Subjectcontenttype,
  useCreateStudentMutation,
  useGetParentsQuery,
  useGetStudentByIdQuery,
  useGetTariffsToSelectorQuery,
  useUpdateStudentMutation,
  useUpdateUserBlockMutation,
} from '../../../../../generated/graphql';
import Comments from '../../../../../components/Comments/Comments';
import AvatarFormInput from '../../../../../components/common/AvatarFormInput/AvatarFormInput';
import { useNavigationLocking } from '../../../../../hooks/blockNavigationHooks';
import UserAvatar from '../../../../../components/UserAvatar';
import AuditLogs, { AuditLogContentTypeEnum } from '../../../../../components/AuditLog/AuditLogs';
import UserPasswordReset from '../../../../../components/UserPasswordReset/UserPasswordReset';

const gutter: [Gutter, Gutter] = [16, 16];

type Params = {
  studentId: string;
};

interface StudentFormValues {
  firstname?: string | null,
  lastname?: string | null,
  patronymic?: string | null,
  email: string | null,
  phone?: string | null,
  telegram?: string | null,
  vk?: string | null,
  avatarUrl?: string | null,
  parents?: string[] | null,
  tariff?: string | null,
  birthday?: Dayjs | null,
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

const StudentPage: FC = () => {
  const { studentId } = useParams<Params>();

  const navigate = useNavigate();

  useEffect(() => {
    if (!studentId) {
      navigate(USERS);
    }
  }, [navigate, studentId]);

  const { data, loading, refetch } = useGetStudentByIdQuery(
    {
      variables: { id: studentId || '' },
      skip: studentId === 'new' || !studentId,
      fetchPolicy: 'network-only',
    },
  );

  const userId = data?.student?.data?.attributes?.user?.data?.id;

  const { data: dataParents, loading: parentsLoading } = useGetParentsQuery({
    variables: {
      pagination: {
        pageSize: 100000,
      },
    },
  });

  const { data: dataTariffs, loading: tariffsLoading } = useGetTariffsToSelectorQuery();

  const isCreateMode = studentId === 'new';

  const student = studentId !== 'new' ? data?.student?.data : undefined;

  const initialFormValues: StudentFormValues = useMemo(() => ({
    blocked: student?.attributes?.user?.data?.attributes?.blocked ?? false,
    firstname: student?.attributes?.firstname || '',
    lastname: student?.attributes?.lastname || '',
    patronymic: student?.attributes?.patronymic || '',
    email: student?.attributes?.email || '',
    phone: student?.attributes?.phone || '',
    telegram: student?.attributes?.telegram || '',
    vk: student?.attributes?.vk || '',
    avatarUrl: student?.attributes?.avatarUrl || null,
    parents: compact(student?.attributes?.parents?.data.map((p) => p.id)) || [],
    tariff: student?.attributes?.tariff?.data?.id || null,
    birthday: student?.attributes?.birthday ? dayjs(student?.attributes?.birthday, 'YYYY-MM-DD') : null,
  }), [student]);

  const onBack = useCallback(() => {
    navigate(USERS);
  }, [navigate]);

  const [form] = Form.useForm<StudentFormValues>();

  useEffect(() => {
    if (isCreateMode) {
      form.resetFields();
    }
  }, [isCreateMode, form]);

  useEffect(() => {
    form.setFieldsValue(initialFormValues);
  }, [initialFormValues, form]);

  const goToCreation = useCallback(() => {
    navigate(makeStudentPath('new'));
  }, [navigate]);

  const extra = useMemo(() => {
    if (!isCreateMode) {
      return (
        <Button type="primary" onClick={goToCreation}>
          Создать нового ученика
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
      parents: values.parents?.sort((a, b) => Number(a) - Number(b)),
    }, {
      ...initialFormValues,
      parents: initialFormValues.parents?.sort((a, b) => Number(a) - Number(b)),
    });
    setHaveChanges(newHaveChanges);
  }, [initialFormValues, form]);

  useEffect(() => {
    onFieldsChange();
  }, [initialFormValues, onFieldsChange]);

  const [createStudent, { loading: createStudentLoading }] = useCreateStudentMutation({
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
      message.success('Ученик создан');
      const newStudentId = result.createStudent?.data?.id;
      if (newStudentId) {
        form.resetFields();
        setHaveChanges(false);
        setTimeout(() => {
          navigate(makeStudentPath(newStudentId), { replace: true });
        }, 1000);
      }
    },
  });

  const onAfterUpdate = useCallback(async () => {
    await refetch();
    form.resetFields();
    message.success('Данные ученика сохранены');
  }, [refetch, form]);

  const [updateStudent, { loading: updateStudentLoading }] = useUpdateStudentMutation({
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

  const onFinish = useCallback(async (values: StudentFormValues) => {
    if (isCreateMode) {
      await createStudent({
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
            parents: values.parents,
            tariff: values.tariff,
            birthday: values.birthday?.format('YYYY-MM-DD'),
          },
        },
      });
    } else if (studentId) {
      const res1 = await updateStudent({
        variables: {
          id: studentId,
          data: {
            firstname: values.firstname,
            lastname: values.lastname,
            patronymic: values.patronymic,
            email: values.email,
            phone: values.phone,
            telegram: values.telegram,
            vk: values.vk,
            avatarUrl: values.avatarUrl,
            parents: values.parents,
            tariff: values.tariff,
            birthday: values.birthday?.format('YYYY-MM-DD'),
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
    }
  }, [isCreateMode, studentId, createStudent, updateStudent, userId, onAfterUpdate, updateUserBlockMutation]);

  useNavigationLocking(haveChanges);

  const parentsFilterOption: FilterFunc<DefaultOptionType> = useCallback(
    (input, option) => (option?.name ?? '').includes(input),
    [],
  );

  return (
    <CommonLayout>
      <PageHeader
        title={isCreateMode ? 'Создание ученика' : 'Ученик'}
        onBack={onBack}
        subTitle={student && `ID ${student.id}`}
        extra={extra}
      />
      <div className="pl-6 pr-6 pb-6">
        {loading && <Spin />}
        {(isCreateMode || !!student) && (
          <Form
            key={studentId || 'new'}
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
                  <Form.Item label="Тариф" name="tariff">
                    <Select loading={tariffsLoading}>
                      {dataTariffs?.tariffs?.data?.map((t) => (
                        <Option key={t.id} value={t.id}>
                          {t.attributes?.name}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>

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
                  <Form.Item name="birthday" label="Дата рождения">
                    <DatePicker
                      format="DD.MM.YYYY"
                    />
                  </Form.Item>

                  <Form.Item name="avatarUrl" noStyle>
                    <AvatarFormInput avatarLetter={initialFormValues.lastname?.charAt(0)} />
                  </Form.Item>

                  <Form.Item label="Родители" name="parents">
                    <Select
                      size="large"
                      mode="multiple"
                      loading={parentsLoading}
                      placeholder="Выберете родителя"
                      optionFilterProp="children"
                      filterOption={parentsFilterOption}
                    >
                      {dataParents?.parents?.data?.map((p) => (
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
              loading={createStudentLoading || updateStudentLoading || updateUserBlockLoading}
              disabled={!haveChanges}
            >
              Сохранить
            </Button>
          </Form>
        )}
        {student && student.id && (
          <div className="pt-8">
            <Comments
              subjectContentType={Enum_Comment_Subjectcontenttype.Student}
              subjectContentTypeId={student.id}
            />
          </div>
        )}
        {student && student.id && (
          <div className="pt-8">
            <AuditLogs
              contentType={AuditLogContentTypeEnum.STUDENT}
              entityId={student.id}
            />
          </div>
        )}
      </div>
    </CommonLayout>
  );
};

export default StudentPage;
