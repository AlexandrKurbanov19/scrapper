import React, { FC, useCallback } from 'react';
import {
  Button, Input, Space, message, Form,
} from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import type { Rule } from 'rc-field-form/lib/interface';

import useStore from 'domain/modelLayer/store/useStore';
import { ABOUT_PAGE, FORGET_PASSWORD, INDEX } from '../../routes';
import { useLoginMutation } from '../../generated/graphql';
import CenterLayout from '../../components/layout/CenterLayout';

interface ILoginUserData {
  login: string;
  password: string;
}

const emailRules: Rule[] = [
  {
    type: 'email',
    message: 'Введите корректный email',
    transform: (value) => value.trim(),
  },
  {
    required: true,
    message: 'Пожалуйста введите свой логин',
  },
  { whitespace: false },
];

const passwordRules: Rule[] = [
  {
    required: true,
    message: 'Пожалуйста введите свой пароль',
  },
];

const LoginPage: FC = () => {
  const [loginMutation] = useLoginMutation();
  const [form] = Form.useForm();
  const { authStore: store } = useStore();
  const navigate = useNavigate();

  const onSubmit = useCallback(async (values: ILoginUserData) => {
    try {
      const res = await loginMutation({
        variables: {
          input: {
            identifier: values.login.trim(),
            password: values.password,
          },
        },
      });
      const jwt = res.data?.login.jwt;
      const userId = res.data?.login.user.id;
      if (!jwt || !userId) {
        message.error('Ошибка при авторизации');
        return;
      }

      store.auth.setToken(jwt);
      store.auth.setUserId(userId);

      navigate(INDEX);
    } catch (error: unknown) {
      console.error(error);
      if (error instanceof Error && error.message === 'Failed to fetch') {
        message.error('Ошибка получения данных');
      } else {
        message.error('Логин или пароль не верный');
      }
    }
  }, [loginMutation, navigate, store.auth]);

  return (
    <CenterLayout>
      <Space direction="vertical" size={20} className="w-full">
        <Form
          name="basic"
          form={form}
          layout="vertical"
          onFinish={onSubmit}
          autoComplete="off"
        >
          <Space direction="vertical" size={20} className="w-full">
            <Form.Item
              label="Логин/Email"
              name="login"
              data-test="email"
              rules={emailRules}
            >
              <Input size="large" placeholder="example@site.com" />
            </Form.Item>
          </Space>
          <Space direction="vertical" size={20} className="w-full">
            <Form.Item
              label="Пароль"
              name="password"
              data-test="password"
              rules={passwordRules}
            >
              <Input.Password size="large" placeholder="введите пароль" autoComplete="false" />
            </Form.Item>
          </Space>

          <Form.Item shouldUpdate>
            {() => (
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                data-test="loginButton"
                className="mt-5"
                block
                disabled={
                  !form.isFieldsTouched(true)
                  || form.getFieldsError().filter(({ errors }) => errors.length).length > 0
                }
              >
                Войти
              </Button>
            )}
          </Form.Item>
          <Form.Item>
            <Link to={FORGET_PASSWORD}>
              <Button type="link" block>
                Забыли пароль?
              </Button>
            </Link>
            <Link to={ABOUT_PAGE}>
              <Button type="link" block>
                На главную
              </Button>
            </Link>
          </Form.Item>
        </Form>
      </Space>
    </CenterLayout>
  );
};

export default observer(LoginPage);
