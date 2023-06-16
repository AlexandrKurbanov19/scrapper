import { Meta, StoryObj } from '@storybook/react';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/lib/locale/ru_RU';
import React from 'react';
import getTheme from '../../../antToken';
import ModalConfirm from './index';

const meta: Meta<typeof ModalConfirm> = {
  title: 'ModalConfirm',
  component: ModalConfirm,
  args: {
    showConfirm: true,
  },
  argTypes: {
    showConfirm: {
      control: {
        type: 'boolean',
      },
    },
    onOk: {
      action: 'confirmed',
    },
    onCancel: {
      action: 'canceled',
    },
  },
  decorators: [
    (Story) => (
      <ConfigProvider
        locale={ruRU}
        theme={getTheme('light')}
      >
        <Story />
      </ConfigProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ModalConfirm>;

export const ModalConfirmDefault: Story = {
  name: 'Default',
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => (
    <ModalConfirm
      showConfirm={args.showConfirm}
      cancelText="Отмена"
      okText="Да, выйти"
      title="Уверен, что хочешь покинуть занятие?"
    >
      Советуем пройти до конца, но если ты выйдешь, то твой прогресс сохранится
    </ModalConfirm>
  ),
};
