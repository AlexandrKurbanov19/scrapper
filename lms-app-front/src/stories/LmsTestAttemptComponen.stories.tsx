import { Meta, StoryObj } from '@storybook/react';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/lib/locale/ru_RU';
import React from 'react';
import LmsTestAttemptComponent from '../components/common/LmsTestAttemptComponent/LmsTestAttemptComponent';
import getTheme from '../antToken';

const meta: Meta<typeof LmsTestAttemptComponent> = {
  title: 'LmsTestAttemptComponent',
  component: LmsTestAttemptComponent,
  args: {
    cardTitle: 'Тест',
    testTitle: 'Сможешь ли ты разобраться, что к чему, если попадешь в Россию в XVI веке?',
    remainingTries: 1,
    attemptList: [
      {
        maxPoints: 20,
        receivedPoints: 15,
        passingScore: 10,
        attemptNumber: 1,
        status: false,
      },
      {
        maxPoints: 20,
        receivedPoints: 15,
        passingScore: 10,
        attemptNumber: 1,
        status: true,
      },
    ],
  },
  argTypes: {
    remainingTries: {
      control: {
        type: 'number',
      },
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

type Story = StoryObj<typeof LmsTestAttemptComponent>;

export const LmsTestAttemptComponentDefault: Story = {
  name: 'Default',
  render: (args) => <LmsTestAttemptComponent {...args} />,
  args: {
    cardTitle: 'Тест',
    testTitle: 'Сможешь ли ты разобраться, что к чему, если попадешь в Россию в XVI веке?',
    remainingTries: 1,
    attemptList: [
      {
        maxPoints: 20,
        receivedPoints: 15,
        passingScore: 10,
        attemptNumber: 1,
        status: false,
      },
      {
        maxPoints: 20,
        receivedPoints: 15,
        passingScore: 10,
        attemptNumber: 1,
        status: true,
      },
    ],
  },
};
