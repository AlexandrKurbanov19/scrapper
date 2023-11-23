import React, { FC } from 'react';
import {
  Button, Input, Space, message, Form, Select, Card,
} from 'antd';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import MaskedInput from 'antd-mask-input';
import useStore from 'domain/modelLayer/store/useStore';
import CenterLayout from '../../components/layout/CenterLayout';
import { ABOUT_PAGE } from '../../routes';
import { useRegisterParentOrChildrenMutation, Enum_Public_Registration_Role } from '../../generated/graphql';
import {
  confirmPassRule,
  passRule,
  phoneRule,
  registrationEmailRule,
  registrationFirstNameRule,
  registrationRole,
} from './authRuleForm';

interface ILoginUserData {
  email: string;
  password: string;
  phone: string;
  role: Enum_Public_Registration_Role;
  firstname: string;
  patronymic?: string;
  username: string;
  lastname?: string;
}

const RegistrationPage: FC = () => {
  const [registerParentOrChildrenMutation] = useRegisterParentOrChildrenMutation();
  const [form] = Form.useForm();
  const { authStore: store } = useStore();
  const navigate = useNavigate();

  const onSubmit = async (values: ILoginUserData) => {
    try {
      const res = await registerParentOrChildrenMutation({
        variables: {
          data: {
            username: values.email.trim(),
            email: values.email.trim(),
            patronymic: values?.patronymic,
            firstname: values.firstname,
            lastname: values.lastname,
            phone: values.phone,
            password: values.password,
            role: values.role,
          },
        },
      });
      const jwt = res.data?.registerParentOrChildren?.jwt;
      const userId = res.data?.registerParentOrChildren?.user?.id;
      if (!jwt || !userId) {
        message.error('Ошибка при регистрации');
        return;
      }

      store.auth.setToken(jwt);
      store.auth.setUserId(userId);
      navigate(ABOUT_PAGE);
    } catch (error: any) {
      // eslint-disable-next-line no-console
      console.error(error);
      if (error.message === 'Failed to fetch') {
        message.error('Ошибка получения данных');
      }
    }
  };

  return (
    <CenterLayout>
      <Space direction="vertical" size={10} className="w-full">
        <Card title="Регистрация" extra={<h3>AdAnalyzerPro</h3>}>
          <Form
            name="basic"
            form={form}
            layout="vertical"
            onFinish={(values) => onSubmit(values)}
            autoComplete="off"
          >
            <Form.Item
              label="Ваше имя"
              className="mb-2"
              name="firstname"
              data-test="firstname"
              rules={registrationFirstNameRule}
            >
              <Input autoComplete="off" size="middle" />
            </Form.Item>
            <Form.Item
              label="Ваша фамилия"
              className="mb-2"
              name="lastname"
              data-test="lastname"
            >
              <Input autoComplete="off" size="middle" />
            </Form.Item>
            <Form.Item
              label="Ваше отчество"
              className="mb-2"
              name="patronymic"
              data-test="patronymic"
            >
              <Input autoComplete="off" size="middle" />
            </Form.Item>
            <Form.Item
              className="mb-2"
              rules={registrationRole}
              label="Выберите вашу роль:"
              name="role"
              initialValue="CLIENT"
            >
              <Select disabled placeholder="Ваша роль" value="CLIENT">
                <Select.Option value="CLIENT">Клиент</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              className="mb-2"
              data-test="email"
              rules={registrationEmailRule}
            >
              <Input autoComplete="off" size="middle" placeholder="example@site.com" />
            </Form.Item>
            <Form.Item
              className="mb-2"
              name="phone"
              label="Номер телефона"
              rules={phoneRule}
            >
              <MaskedInput mask="+7 (000) 000-00-00" required placeholder="+7 (999) 999-99-99" />
            </Form.Item>
            <Form.Item
              label="Пароль"
              name="password"
              className="mb-2"
              data-test="password"
              rules={passRule}
              hasFeedback
            >
              <Input.Password autoComplete="off" size="middle" placeholder="введите пароль" />
            </Form.Item>
            <Form.Item
              name="confirm"
              label="Подтвердить пароль"
              dependencies={['password']}
              className="mb-2"
              hasFeedback
              rules={confirmPassRule}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item className="mb-0" shouldUpdate>
              {() => (
                <Button
                  type="primary"
                  size="middle"
                  htmlType="submit"
                  className="mt-2"
                  data-test="loginButton"
                  block
                  disabled={form.getFieldsError().filter(({ errors }: any) => errors.length).length > 0}
                >
                  Зарегистрироваться
                </Button>
              )}
            </Form.Item>
          </Form>
        </Card>
        <Link to={ABOUT_PAGE}>
          <Button type="link" block>
            На главную
          </Button>
        </Link>
      </Space>
    </CenterLayout>
  );
};

export default RegistrationPage;
