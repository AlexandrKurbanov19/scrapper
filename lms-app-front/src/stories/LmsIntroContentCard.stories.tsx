import { Meta, StoryObj } from '@storybook/react';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/lib/locale/ru_RU';
import React from 'react';
import getTheme from '../antToken';
import LmsIntroContentCard from '../components/common/LmsIntroContentCard/LmsIntroContentCard';

const meta: Meta<typeof LmsIntroContentCard> = {
  title: 'LmsIntroContentCard',
  component: LmsIntroContentCard,
  args: {
    cardTitle: 'Цели',
    contentLeftTitle: 'В этом уроке ты узнаешь:',
    contentLeftList: [
      'Основные формамы землевладения',
      'Формирование единого Российского государства способствовало укреплению экономики',
      'Многие территории бывшей Киевской Руси входили в состав других государств, а это означало, что традиционные связи — торговые и культурные — были нарушены.',
    ],
    contentRightImageUrl: 'https://w.forfun.com/fetch/94/94c56e15f13f1de4740a76742b0b594f.jpeg',
  },
  argTypes: {
    getStartTest: {
      action: 'confirmed',
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

type Story = StoryObj<typeof LmsIntroContentCard>;

export const LmsIntroContentCardDefault: Story = {
  name: 'Default',
  render: (args) => <LmsIntroContentCard {...args} />,
  args: {
    cardTitle: 'Цели',
    contentLeftTitle: 'В этом уроке ты узнаешь:',
    contentLeftList: [
      'Основные формамы землевладения',
      'Формирование единого Российского государства способствовало укреплению экономики',
      'Многие территории бывшей Киевской Руси входили в состав других государств, а это означало, что традиционные связи — торговые и культурные — были нарушены.',
    ],
    contentRightImageUrl: 'https://w.forfun.com/fetch/94/94c56e15f13f1de4740a76742b0b594f.jpeg',
  },
};
