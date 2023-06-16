import { Meta, StoryObj } from '@storybook/react';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/lib/locale/ru_RU';
import React from 'react';
import LmsProgressLine from '../components/common/LmsProgressLine/LmsProgressLine';
import getTheme from "../antToken";

const meta: Meta<typeof LmsProgressLine> = {
  title: 'LmsProgressLine',
  component: LmsProgressLine,
  args: {
    studentPlan: 5,
    studentProgress: 3,
    percentProgress: 50,
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

type Story = StoryObj<typeof LmsProgressLine>;

export const LmsProgressLineDefault: Story = {
  name: 'Default',
  render: (args) => <LmsProgressLine {...args} />,
  args: {
    studentPlan: 5,
    studentProgress: 3,
    percentProgress: 50,
  },
};
