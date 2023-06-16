import { Meta, StoryObj } from '@storybook/react';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/lib/locale/ru_RU';
import React from 'react';
import getTheme from '../antToken';
import LmsIntroActionCard from '../components/common/LmsIntroActionCard/LmsIntroActionCard';

const meta: Meta<typeof LmsIntroActionCard> = {
  title: 'LmsIntroActionCard',
  component: LmsIntroActionCard,
  args: {
    cardTitle: 'Практическое задание',
    cardText: 'Нарисуй схему крестьянского двора и расположи там все объекты сельского хозяйства, которые знаешьеке?',
    attemptsNumber: 2,
    buttonText: 'Начать!',
    progressStep: 'test',
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

type Story = StoryObj<typeof LmsIntroActionCard>;

export const LmsIntroActionCardDefault: Story = {
  name: 'Default',
  render: (args) => <LmsIntroActionCard {...args} />,
  args: {
    cardTitle: 'Практическое задание',
    cardText: 'Нарисуй схему крестьянского двора и расположи там все объекты сельского хозяйства, которые знаешьеке?',
    attemptsNumber: undefined,
    buttonText: 'Начать!',
    progressStep: 'test',
  },
};
