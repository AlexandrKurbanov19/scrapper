import React, {
  ChangeEvent, FC, useCallback, useState,
} from 'react';
import {
  Button, Input, Space, message, Card,
} from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { LeftOutlined } from '@ant-design/icons';

import Spinner from '../../components/Spinner';
import { LOGIN } from '../../routes';
import { validateEmail } from '../../utils/utils';
import { useForgotPasswordMutation } from '../../generated/graphql';
import CenterLayout from '../../components/layout/CenterLayout';

const ForgetPasswordPage: FC = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const [forgotPasswordMutation] = useForgotPasswordMutation();

  const onSubmit = useCallback(async () => {
    const isValidEmail = validateEmail(email);

    if (!isValidEmail) {
      message.error('Введите email адрес в правильном формате.');
      return;
    }

    setLoading(true);
    try {
      const res = await forgotPasswordMutation({
        variables: {
          email,
        },
      });

      if (res.data?.forgotPassword?.ok) {
        message.success(`Откройте письмо отправленное на почту ${email} и следуйте инструкциям.`);
        setLoading(false);
        navigate(LOGIN);
        return;
      }
      message.error('Ошибка при восстановлении пароля.');

      setLoading(false);
    } catch (error: unknown) {
      message.error('Пользователя с таким email не существует.');
      setLoading(false);
    }
  }, [email, forgotPasswordMutation, navigate]);

  const onEmailChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }, [setEmail]);

  return (
    <CenterLayout>
      <Spinner spinning={loading}>
        <Space direction="vertical" size={20} className="w-full">
          <Card title="Восстановление пароля" extra={<h3>AdAnalyzerPro</h3>}>
            Введите ваш email, который вы&nbsp;использовали для авторизации.
            Мы&nbsp;создадим новый пароль и&nbsp;пришлем его
            на&nbsp;указанную почту.

            <Space direction="vertical" size={10} className="w-full">
              <div className="text-left">Email</div>
              <Input
                disabled={loading}
                onChange={onEmailChange}
                value={email}
                placeholder="example@site.com"
                size="middle"
                className="rounded-md"
              />
            </Space>
            <Button type="primary" className="mt-4" size="middle" block onClick={onSubmit}>Выслать новый пароль</Button>
          </Card>
          <Link to={LOGIN}>
            <Button type="link" block icon={<LeftOutlined />}>Назад</Button>
          </Link>
        </Space>
      </Spinner>
    </CenterLayout>
  );
};

export default observer(ForgetPasswordPage);
