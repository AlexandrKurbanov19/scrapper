import React, { FC } from "react";
import { Button, Input, Space, message, Form, Select } from "antd";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import MaskedInput from "antd-mask-input";
import useStore from "domain/modelLayer/store/useStore";
import CenterLayout from "../../components/layout/CenterLayout";
import { ABOUT_PAGE } from "../../routes";
import { useRegisterParentOrChildrenMutation, Enum_Public_Registration_Role } from "../../generated/graphql";
import { log } from "console";
interface ILoginUserData {
  email: string;
  password: string;
  phone: string;
  role: Enum_Public_Registration_Role;
  firstname: string;
  patronymic: string;
  username: string;
  lastname: string;
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
            patronymic: values.patronymic,
            firstname: values.firstname,
            lastname: values.lastname,
            phone: values.phone,
            password: values.password,
            role: values.role
          }
        }
      });
      const jwt = res.data?.registerParentOrChildren?.jwt;
      const userId = res.data?.registerParentOrChildren?.user?.id;
      if (!jwt || !userId) {
        message.error("Ошибка при регистрации");
        return;
      }

      store.auth.setToken(jwt);
      store.auth.setUserId(userId);
      navigate(ABOUT_PAGE);
    } catch (error: any) {
      // eslint-disable-next-line no-console
      console.error(error);
      if (error.message === "Failed to fetch") {
        message.error("Ошибка получения данных");
      }
    }
  };

  console.log(form.getFieldsError());
  return (
    <CenterLayout>
      <Space direction="vertical" size={10} className="w-full">
        <Form
          name="basic"
          form={form}
          className="pt-5"
          layout="vertical"
          onFinish={(values) => onSubmit(values)}
          autoComplete="off"
        >
          <Form.Item
            label="Ваше имя"
            className="mb-2"
            name="firstname"
            data-test="firstname"
            rules={[
              {
                transform: (value) => value.trim()
              },
              {
                required: true,
                message: "Пожалуйста введите свое имя"
              },
              { whitespace: false }
            ]}
          >
            <Input autoComplete="off" size="middle" />
          </Form.Item>
          <Form.Item
            label="Ваша фамилия"
            className="mb-2"
            name="lastname"
            data-test="lastname"
            rules={[
              {
                transform: (value) => value.trim()
              },
              {
                required: true,
                message: "Пожалуйста введите свою фамилию"
              },
              { whitespace: false }
            ]}
          >
            <Input autoComplete="off" size="middle" />
          </Form.Item>
          <Form.Item
            label="Ваше отчество"
            className="mb-2"
            name="patronymic"
            data-test="patronymic"
            rules={[
              {
                transform: (value) => value.trim()
              },
              {
                required: true,
                message: "Пожалуйста введите свое отчество"
              },
              { whitespace: false }
            ]}
          >
            <Input autoComplete="off" size="middle" />
          </Form.Item>
          <Form.Item
            className="mb-2"
            rules={[
              {
                required: true,
                message: "Пожалуйста выбирете свою роль"
              }
            ]}
            label="Выберите вашу роль:"
            name="role"
            initialValue={"CLIENT"}
          >
            <Select disabled placeholder="Ваша роль" defaultValue={'CLIENT'}>
              <Select.Option value="CLIENT">Клиент</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            className="mb-2"
            data-test="email"
            rules={[
              {
                type: "email",
                message: "Введите корректный email",
                transform: (value) => value.trim()
              },
              {
                required: true,
                message: "Пожалуйста введите свой email"
              },
              { whitespace: false }
            ]}
          >
            <Input autoComplete="off" size="middle" placeholder="example@site.com" />
          </Form.Item>
          <Form.Item
            className="mb-2"
            name="phone"
            label="Номер телефона"
            rules={[
              {
                pattern: /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/,
                message: "Пожалуйста введите свой номер телефона"
              },
              {
                required: true,
                message: "Пожалуйста введите свой номер телефона"
              }
            ]}
          >
            <MaskedInput mask="+7 (000) 000-00-00" required placeholder="+7 (999) 999-99-99" />
          </Form.Item>
          <Form.Item
            label="Пароль"
            name="password"
            className="mb-2"
            data-test="password"
            rules={[
              {
                required: true,
                message: "Пожалуйста введите свой пароль"
              }
            ]}
            hasFeedback
          >
            <Input.Password autoComplete="off" size="middle" placeholder="введите пароль" />
          </Form.Item>
          <Form.Item
            name="confirm"
            label="Подтвердить пароль"
            dependencies={["password"]}
            className="mb-2"
            hasFeedback
            rules={[
              {
                required: true,
                message: "Пожалуйста, подтвердите свой пароль!"
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(new Error("Два введенных вами пароля не совпадают!"));
                }
              })
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item className="mb-2" shouldUpdate>
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
          <Form.Item className="mb-2">
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

export default RegistrationPage;
