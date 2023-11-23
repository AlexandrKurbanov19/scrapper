import React, { FC } from 'react';
import { Button, Form, Input } from 'antd';

const emailRules = [{ required: true, message: 'Пожалуйста введите свой email!' }];
const textRules = [{ required: true, message: 'Пожалуйста введите текст!' }];
interface IFeedbackForm {
  onSubmitForm: (args: any) => void;
  onSubmitFormFailed: (args: any) => void;
  pending: boolean,
}
const FeedbackForm: FC<IFeedbackForm> = ({ onSubmitForm, onSubmitFormFailed, pending }) => (
  <Form
    className="max-w-[650px]"
    layout="vertical"
    onFinish={onSubmitForm}
    onFinishFailed={onSubmitFormFailed}
  >
    <Form.Item name="email" rules={emailRules} label="Введите свою почту">
      <Input placeholder="test@ya.ru" />
    </Form.Item>
    <Form.Item name="title" label="Укажите тему сообщения">
      <Input placeholder="test@ya.ru" />
    </Form.Item>
    <Form.Item name="text" rules={textRules} label="Опишите свою проблему или свои индивидуальный заказ">
      <Input.TextArea />
    </Form.Item>
    <Button loading={pending} type="primary" danger htmlType="submit" block>Отправить</Button>
  </Form>
);

export default FeedbackForm;
