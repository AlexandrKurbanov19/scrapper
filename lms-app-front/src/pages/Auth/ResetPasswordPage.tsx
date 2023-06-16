import React, {
  FC, useCallback, useEffect,
} from 'react';
import {
  Button,
  Input,
  Space,
  message,
  Form,
} from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

import { observer } from 'mobx-react-lite';

import useStore from 'domain/modelLayer/store/useStore';
import type { Rule } from 'rc-field-form/lib/interface';
import { FORGET_PASSWORD, INDEX, LOGIN } from '../../routes';
import { useResetPasswordMutation } from '../../generated/graphql';
import CenterLayout from '../../components/layout/CenterLayout';

interface IUserCodeSubmit {
  email: string;
  code: string;
  password: string;
  passwordConfirmation: string;
}

const passwordRules: Rule[] = [
  {
    required: true,
    message: 'Введите новый пароль',
  },
  {
    min: 8,
    message: 'Минимальная длинна пароля 8 символов',
  },
];

const newPasswordRules: Rule[] = [
  {
    required: true,
    message: 'Повторите новый пароль',
  },
  ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue('password') === value) {
        return Promise.resolve();
      }

      return Promise.reject(new Error('Пароли не совпадают!'));
    },
  }),
];

const newPassDependencies = ['password'];
const ResetPasswordPage: FC = () => {
  const { authStore: store } = useStore();

  const [queryParams] = useSearchParams();
  const code = queryParams.get('code') || '';

  const navigate = useNavigate();

  const [resetPasswordMutation] = useResetPasswordMutation();

  const onSubmit = useCallback(async (values: IUserCodeSubmit) => {
    try {
      const res = await resetPasswordMutation({
        variables: {
          code,
          password: values.password,
          passwordConfirmation: values.passwordConfirmation,
        },
      });
      const jwt = res.data?.resetPassword?.jwt;
      const userId = res.data?.resetPassword?.user.id;
      if (!jwt || !userId) {
        message.error('Ошибка при восстановлении пароля');
        return;
      }

      store.auth.setToken(jwt);

      navigate(INDEX);
    } catch (error: unknown) {
      console.error(error);

      if (error instanceof Error) {
        if (error.message === 'Failed to fetch') {
          message.error('Ошибка получения данных');
        } else if (error.message === 'Incorrect code provided') {
          message.error(
            'Ошибка. Ссылка на восстановления пароля более не действительна. Запросите новую.',
          );
          navigate(FORGET_PASSWORD, { replace: true });
        }
      } else {
        message.error('Логин или пароль не верный');
      }
    }
  }, [code, navigate, resetPasswordMutation, store.auth]);

  useEffect(() => {
    if (!code) {
      navigate(INDEX, { replace: true });
    }
  }, [code, navigate]);

  return (
    <CenterLayout>
      <Space direction="vertical" size={20} className="w-full">
        <Form
          name="basic"
          layout="vertical"
          onFinish={onSubmit}
          autoComplete="off"
        >
          <Space direction="vertical" size={10} className="w-full">
            <Form.Item
              name="password"
              label="Новый пароль"
              rules={passwordRules}
              hasFeedback
            >
              <Input.Password size="large" />
            </Form.Item>
            <Form.Item
              name="passwordConfirmation"
              label="Новый пароль ещё раз"
              dependencies={newPassDependencies}
              hasFeedback
              rules={newPasswordRules}
            >
              <Input.Password size="large" />
            </Form.Item>
          </Space>
          <Form.Item>
            <Button
              type="primary"
              size="large"
              className="mt-5"
              block
              htmlType="submit"
            >
              Установить новый пароль и войти
            </Button>

            <Link to={LOGIN}>
              <Button type="link" block icon={<LeftOutlined />}>
                Назад
              </Button>
            </Link>
          </Form.Item>
        </Form>
      </Space>
    </CenterLayout>
  );
};

export default observer(ResetPasswordPage);
