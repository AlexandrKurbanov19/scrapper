import { Meta, StoryObj } from '@storybook/react';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/lib/locale/ru_RU';
import React from 'react';
import getTheme from '../antToken';
import LmsTestResultComponent from '../components/common/LmsTestResultComponent/LmsTestResultComponent';

const meta: Meta<typeof LmsTestResultComponent> = {
  title: 'LmsTestResultComponent',
  component: LmsTestResultComponent,
  args: {
    maxPoints: 20,
    pointsReceived: 5,
    passingScore: 10,
    countOfAttempts: 3,
    numberOfAttempts: 0,
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

type Story = StoryObj<typeof LmsTestResultComponent>;

export const LmsTestResultComponentDefault: Story = {
  name: 'Default',
  render: (args) => <LmsTestResultComponent {...args} />,
  args: {
    maxPoints: 20,
    pointsReceived: 5,
    passingScore: 10,
    countOfAttempts: 3,
    numberOfAttempts: 0,
  },
};
