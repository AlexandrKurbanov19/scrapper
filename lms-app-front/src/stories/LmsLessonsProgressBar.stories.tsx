import { Meta, StoryObj } from '@storybook/react';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/lib/locale/ru_RU';
import React from 'react';
import getTheme from '../antToken';
import LmsLessonsProgressBar from '../components/common/LmsLessonsProgressBar/LmsLessonsProgressBar';

const meta: Meta<typeof LmsLessonsProgressBar> = {
  title: 'LmsLessonsProgressBar',
  component: LmsLessonsProgressBar,
  args: {
    percentProgress: 20,
    headerText: 'Узнать, каким было и как жило население России в XVI веке& каким было и как жило население России в XVI веке ',
    headerTitle: 'Твоя цель:',
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

type Story = StoryObj<typeof LmsLessonsProgressBar>;

export const LmsLessonsProgressBarDefault: Story = {
  name: 'Default',
  render: (args) => <LmsLessonsProgressBar {...args} />,
  args: {
    percentProgress: 20,
    headerText: 'Узнать, каким было и как жило население России в XVI веке& каким было и как жило население России в XVI веке ',
    headerTitle: 'Твоя цель:',
  },
};
