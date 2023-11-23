import React, { useCallback, useMemo, useState } from 'react';
import {
  Typography, Card, Space, Button, Form, Input, Spin,
} from 'antd';
import { observer } from 'mobx-react-lite';
import CommonLayout from '../../components/layout/CommonLayout';
import useStore from '../../domain/modelLayer/store/useStore';
import { useChangeOwnPasswordMutation, useChangeUserDataMutation } from '../../generated/graphql';
import {
  firstNameProfile,
  lastNameProfile,
  newPassRuleReset,
  passRuleReset,
  registrationEmailRule,
} from '../Auth/authRuleForm';

export interface IProfileUserData {
  firstname?: string;
  lastname?: string;
  patronymic?: string;
  email?: string;
}
const ProfilePage = () => {
  const { profileStore: { profile, fetchProfile } } = useStore();
  const [activeEditMode, setActiveEditMode] = useState<'profileFields' | 'password' | 'none'>('none');
  const [changeUserDataMutation, { loading: loadProfile }] = useChangeUserDataMutation();
  const [changeOwnPasswordMutation, { loading: loadPass }] = useChangeOwnPasswordMutation();
  const saveInProgress = loadProfile || loadPass;
  const onProfileFieldsSubmit = useCallback(async (value: IProfileUserData) => {
    if (!profile?.id) {
      return;
    }
    await changeUserDataMutation({
      variables: {
        id: profile?.id,
        data: {
          firstname: value?.firstname,
          lastname: value?.lastname,
          patronymic: value?.patronymic,
          email: value?.email,
        },
      },
      onCompleted: () => {
        fetchProfile();
        setActiveEditMode('none');
      },
    });
  }, [profile?.id, changeUserDataMutation, fetchProfile]);
  const onChangeOwnPasswordSubmit = useCallback(async (value: { currentPassword: string, newPassword: string }) => {
    await changeOwnPasswordMutation({
      variables: {
        data: {
          currentPassword: value.currentPassword,
          newPassword: value.newPassword,
        },
      },
    });
  }, [changeOwnPasswordMutation]);
  const profileFieldsInitialValues: IProfileUserData = useMemo(() => ({
    lastname: profile?.lastname,
    firstname: profile?.firstname,
    patronymic: profile?.patronymic,
    email: profile?.email,
  }), [profile?.lastname, profile?.firstname, profile?.patronymic, profile?.email]);

  const onButtonChangeDataClick = useCallback(() => setActiveEditMode('profileFields'), []);
  const onButtonChangePasswordClick = useCallback(() => () => setActiveEditMode('password'), []);

  const onGoBackButtonClick = useCallback(() => setActiveEditMode('none'), []);

  const onButtonClick = useCallback(() => setActiveEditMode('none'), []);
  return (
    <CommonLayout>
      <div className="p-2">
        <Typography.Title level={3}>Профиль</Typography.Title>
        <Card>
          { activeEditMode === 'none'
              && (
                <div>
                  <div className="flex items-center justify-start">
                    <Space size="small" className="items-baseline">
                      <Typography.Title level={5}>Фамилия: </Typography.Title>
                      <Typography.Text>
                        {profile?.lastname}
                      </Typography.Text>
                    </Space>
                  </div>
                  <div className="flex items-center justify-start">
                    <Space size="small" className="items-baseline">
                      <Typography.Title level={5}>Имя: </Typography.Title>
                      <Typography.Text>
                        {profile?.firstname}
                      </Typography.Text>
                    </Space>
                  </div>
                  <div className="flex items-center justify-start">
                    <Space size="small" className="items-baseline">
                      <Typography.Title level={5}>Отчество: </Typography.Title>
                      <Typography.Paragraph>
                        {profile?.patronymic}
                      </Typography.Paragraph>
                    </Space>
                  </div>
                  <div className="flex items-center justify-start mb-[30px]">
                    <Space size="small" className="items-baseline">
                      <Typography.Title level={5}>Email: </Typography.Title>
                      <Typography.Paragraph>
                        {profile?.email}
                      </Typography.Paragraph>
                    </Space>
                  </div>
                  <div>
                    <Button
                      type="primary"
                      className="mr-[15px]"
                      onClick={onButtonChangeDataClick}
                    >
                      Изменить данные
                    </Button>
                    <Button
                      type="primary"
                      className="mr-[15px]"
                      onClick={onButtonChangePasswordClick}
                    >
                      Изменить пароль
                    </Button>
                  </div>
                </div>
              )}
          {activeEditMode === 'profileFields' && (
          <Spin spinning={saveInProgress}>
            <Form
              layout="vertical"
              name="control-hooks"
              onFinish={onProfileFieldsSubmit}
              className="mt-[50px] w-max-[450px]"
              initialValues={profileFieldsInitialValues}
            >
              <Space direction="vertical" size={10} className="items-baseline">
                <Form.Item
                  name="lastname"
                  label="Ваша фамилия"
                  rules={lastNameProfile}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="firstname"
                  label="Ваше имя"
                  rules={firstNameProfile}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="patronymic"
                  label="Ваше отчество"
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="Ваш email:"
                  rules={registrationEmailRule}
                >
                  <Input />
                </Form.Item>
                <Form.Item>
                  <Button
                    className="mt-5 mr-5"
                    type="default"
                    onClick={onGoBackButtonClick}
                    disabled={saveInProgress}
                  >
                    Назад
                  </Button>
                  <Button className="mt-5" type="primary" htmlType="submit" disabled={saveInProgress}>
                    Изменить
                  </Button>
                </Form.Item>
              </Space>
            </Form>
          </Spin>

          )}
          {activeEditMode === 'password' && (
          <Form
            name="basic"
            layout="vertical"
            className="mt-[50px] w-max-[400px]"
            onFinish={onChangeOwnPasswordSubmit}
            autoComplete="off"
          >
            <Space direction="vertical" size={10} className="items-baseline">
              <Form.Item
                name="currentPassword"
                label="Текущий пароль"
                rules={passRuleReset}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                name="newPassword"
                label="Новый пароль"
                rules={newPassRuleReset}
              >
                <Input.Password />
              </Form.Item>
            </Space>
            <Form.Item>
              <Button
                className="mt-5 mr-5"
                type="default"
                disabled={saveInProgress}
                onClick={onButtonClick}
              >
                Назад
              </Button>
              <Button type="primary" className="mt-5" htmlType="submit" disabled={saveInProgress}>
                Установить новый пароль
              </Button>
            </Form.Item>
          </Form>
          )}
        </Card>
      </div>
    </CommonLayout>
  );
};

export default observer(ProfilePage);
