import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import ruRU from 'antd/lib/locale/ru_RU';
import { ConfigProvider } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import StudentLessonsMenu from './index';
import type { StudentRightSidebarMenuProps } from './index';
import getTheme from '../../antToken';

const decoratorStyles = {
  height: '300px',
  display: 'flex',
  justifyContent: 'flex-end',
};

const meta: Meta<typeof StudentLessonsMenu> = {
  title: 'StudentLessonsMenu',
  component: StudentLessonsMenu,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <ConfigProvider
          locale={ruRU}
          theme={getTheme('light')}
        >
          <div style={decoratorStyles}>
            <Story />
          </div>
        </ConfigProvider>
      </BrowserRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof StudentLessonsMenu>;

const module: StudentRightSidebarMenuProps['module'] = {
  id: '1',
  title: 'История. Модуль 1',
};

const themesLong: StudentRightSidebarMenuProps['themes'] = [{
  id: '1',
  title: 'Тема 1. Население и хозяйство России в XVI веке',
  href: '#anchor0',
  status: 'current',
  lessons: [{
    id: '1',
    title: 'Крестьяне и сельское хозяйство',
    href: '#anchor1',
    itemNumber: '1',
    status: 'passed',
  }, {
    id: '2',
    title: 'Казачество',
    href: '#anchor2',
    itemNumber: '2',
    status: 'passed',
  }, {
    id: '3',
    title: 'Городская жизнь и ремесло',
    href: '#anchor3',
    itemNumber: '3',
    status: 'current',
  }, {
    id: '4',
    title: 'Купечество и торговые отношения',
    href: '#anchor4',
    itemNumber: '4',
    status: 'notPassed',
  }, {
    id: '5',
    title: 'Денежная единица',
    href: '#anchor5',
    itemNumber: '5',
    status: 'notPassed',
  }, {
    id: '6',
    title: 'Крестьянская колонизация',
    href: '#anchor6',
    itemNumber: '6',
    status: 'notPassed',
  }, {
    id: '7',
    title: 'Московская улица 16 века waefawefawefawef',
    href: '#anchor7',
    itemNumber: '7',
    status: 'notPassed',
  }, {
    id: '8',
    title: 'Карта московского кремля',
    href: '#anchor8',
    itemNumber: '8',
    status: 'notPassed',
  }, {
    id: '9',
    title: 'Денежная реформа',
    href: '#anchor9',
    itemNumber: '9',
    status: 'notPassed',
  }, {
    id: '10',
    title: 'Опричнина',
    href: '#anchor10',
    itemNumber: '10',
    status: 'notPassed',
  }, {
    id: '11',
    title: 'Установление торговых отношений',
    href: '#anchor11',
    itemNumber: '11',
    status: 'notPassed',
  }, {
    id: '12',
    title: 'Пушечный двор в XVI веке',
    href: '#anchor12',
    itemNumber: '12',
    status: 'notPassed',
  }, {
    id: '13',
    title: 'Соборное уложение',
    href: '#anchor13',
    itemNumber: '13',
    status: 'notPassed',
  }, {
    id: '14',
    title: 'Присяга донских казаков wefwefwefhioaw ef wfdewaf',
    href: '#anchor14',
    itemNumber: '14',
    status: 'notPassed',
  }, {
    id: '15',
    title: 'Еше занятие',
    href: '#anchor15',
    itemNumber: '15',
    status: 'notPassed',
  }, {
    id: '16',
    title: 'И еще занятие weuhfiuawhef aweufh iwaeu',
    href: '#anchor16',
    itemNumber: '16',
    status: 'notPassed',
  }, {
    id: '1q334tq34',
    title: 'Крестьяне и сельское хозяйство',
    href: '#anchor1',
    itemNumber: '1',
    status: 'passed',
  }, {
    id: '23242342343f323',
    title: 'Казачество',
    href: '#anchor2wegwa',
    itemNumber: '2',
    status: 'passed',
  }, {
    id: '3g234g34g',
    title: 'Городская жизнь и ремесло',
    href: '#anchor3fwegweg',
    itemNumber: '3',
    status: 'current',
  }, {
    id: '4w45gw354gq34g',
    title: 'Купечество и торговые отношения',
    href: '#anchor4awefaweg',
    itemNumber: '4',
    status: 'notPassed',
  }, {
    id: '5q34gq34gq34g',
    title: 'Денежная единица',
    href: '#anchor5ergaewrfawe',
    itemNumber: '5',
    status: 'notPassed',
  }, {
    id: 'q34gq3gq34gqfr436',
    title: 'Крестьянская колонизация',
    href: '#anchor6waergaweg',
    itemNumber: '6',
    status: 'notPassed',
  }, {
    id: '34f34ff34g34g7',
    title: 'Московская улица 16 века waefawefawefawef',
    href: '#anchor7srthsrth',
    itemNumber: '7',
    status: 'notPassed',
  }, {
    id: '34gq34gq34g8',
    title: 'Карта московского кремля',
    href: '#anchor8awegaw',
    itemNumber: '8',
    status: 'notPassed',
  }, {
    id: '9qfq34fq34f',
    title: 'Денежная реформа',
    href: '#anchor9awefagreg',
    itemNumber: '9',
    status: 'notPassed',
  }, {
    id: 'q34gq34g10',
    title: 'Опричнина',
    href: '#anchor10waefweaf',
    itemNumber: '10',
    status: 'notPassed',
  }, {
    id: '1134t34gq4g',
    title: 'Установление торговых отношений',
    href: '#anchor11awefawefawef',
    itemNumber: '11',
    status: 'notPassed',
  }, {
    id: '1q34gq34gq34g2',
    title: 'Пушечный двор в XVI веке',
    href: '#anchor12awefawegtr',
    itemNumber: '12',
    status: 'notPassed',
  }, {
    id: '13q4fq34fq34f3',
    title: 'Соборное уложение',
    href: '#anchor13awgawefawe',
    itemNumber: '13',
    status: 'notPassed',
  }, {
    id: '134gq34gq34gq4',
    title: 'Присяга донских казаков wefwefwefhioaw ef wfdewaf',
    href: '#anchor14awegawefewa',
    itemNumber: '14',
    status: 'notPassed',
  }, {
    id: '15qdf23f',
    title: 'Еше занятие',
    href: '#anchor15trehesrg',
    itemNumber: '15',
    status: 'notPassed',
  }, {
    id: '16q3gq34gfq',
    title: 'И еще занятие weuhfiuawhef aweufh iwaeu',
    href: '#anchor16aergawerg',
    itemNumber: '16',
    status: 'notPassed',
  }, {
    id: '173fq34fq34f',
    title: 'Крестьяне и сельское хозяйство',
    href: '#anchor1heargawrgwe',
    itemNumber: '1',
    status: 'passed',
  }, {
    id: '34534',
    title: 'Казачество',
    href: '#anchor2eheargawegwe',
    itemNumber: '2',
    status: 'passed',
  }, {
    id: '234',
    title: 'Городская жизнь и ремесло',
    href: '#anchor3haergaerwgweg',
    itemNumber: '3',
    status: 'current',
  }, {
    id: '56456456',
    title: 'Купечество и торговые отношения',
    href: '#anchor4earhraegaergera',
    itemNumber: '4',
    status: 'notPassed',
  }, {
    id: '23432',
    title: 'Денежная единица',
    href: '#anchor5awregerhrth',
    itemNumber: '5',
    status: 'notPassed',
  }, {
    id: '54645',
    title: 'Крестьянская колонизация',
    href: '#anchor6rthtrhtrh',
    itemNumber: '6',
    status: 'notPassed',
  }, {
    id: '4e5heh',
    title: 'Московская улица 16 века waefawefawefawef',
    href: '#anchor7aefwaef',
    itemNumber: '7',
    status: 'notPassed',
  }, {
    id: 'w45gw45g',
    title: 'Карта московского кремля',
    href: '#anchor8aergaerfagr',
    itemNumber: '8',
    status: 'notPassed',
  }, {
    id: 'rthrtherth',
    title: 'Денежная реформа',
    href: '#anchor9aergfawergwaergawef',
    itemNumber: '9',
    status: 'notPassed',
  }, {
    id: 'serg34g34',
    title: 'Опричнина',
    href: '#anchor10rtehrtgersg',
    itemNumber: '10',
    status: 'notPassed',
  }, {
    id: '45gw45gw45gwh454',
    title: 'Установление торговых отношений',
    href: '#anchor11aw4tgfaw3g4waeg',
    itemNumber: '11',
    status: 'notPassed',
  }, {
    id: '1q2fq2fr2',
    title: 'Пушечный двор в XVI веке',
    href: '#anchor12awegfawegaweg',
    itemNumber: '12',
    status: 'notPassed',
  }, {
    id: '1q34gq33',
    title: 'Соборное уложение',
    href: '#anchor13aewrghergaerg',
    itemNumber: '13',
    status: 'notPassed',
  }, {
    id: '14qq34gq3',
    title: 'Присяга донских казаков wefwefwefhioaw ef wfdewaf',
    href: '#anchor14awegw4eaga4g',
    itemNumber: '14',
    status: 'notPassed',
  }, {
    id: '134t43g5',
    title: 'Еше занятие',
    href: '#anchor15aerga4gaew4rg',
    itemNumber: '15',
    status: 'notPassed',
  }, {
    id: '16q34gq3',
    title: 'И еще занятие weuhfiuawhef aweufh iwaeu',
    href: '#anchor16aw4gaqw34ega43g',
    itemNumber: '16',
    status: 'notPassed',
  }],
}];

const themesMiddle: StudentRightSidebarMenuProps['themes'] = [{
  id: '1',
  title: 'Тема 1. Население и хозяйство России в XVI веке',
  href: '#anchor0',
  status: 'current',
  lessons: [{
    id: '1',
    title: 'Крестьяне и сельское хозяйство',
    href: '#anchor1',
    itemNumber: '1',
    status: 'passed',
  }, {
    id: '2',
    title: 'Казачество',
    href: '#anchor2',
    itemNumber: '2',
    status: 'passed',
  }, {
    id: '3',
    title: 'Городская жизнь и ремесло',
    href: '#anchor3',
    itemNumber: '3',
    status: 'current',
  }, {
    id: '4',
    title: 'Купечество и торговые отношения',
    href: '#anchor4',
    itemNumber: '4',
    status: 'notPassed',
  }, {
    id: '5',
    title: 'Денежная единица',
    href: '#anchor5',
    itemNumber: '5',
    status: 'notPassed',
  }, {
    id: '6',
    title: 'Крестьянская колонизация',
    href: '#anchor6',
    itemNumber: '6',
    status: 'notPassed',
  }, {
    id: '7',
    title: 'Московская улица 16 века waefawefawefawef',
    href: '#anchor7',
    itemNumber: '7',
    status: 'notPassed',
  }, {
    id: '8',
    title: 'Карта московского кремля',
    href: '#anchor8',
    itemNumber: '8',
    status: 'notPassed',
  }, {
    id: '9',
    title: 'Денежная реформа',
    href: '#anchor9',
    itemNumber: '9',
    status: 'notPassed',
  }, {
    id: '10',
    title: 'Опричнина',
    href: '#anchor10',
    itemNumber: '10',
    status: 'notPassed',
  }, {
    id: '11',
    title: 'Установление торговых отношений',
    href: '#anchor11',
    itemNumber: '11',
    status: 'notPassed',
  }, {
    id: '12',
    title: 'Пушечный двор в XVI веке',
    href: '#anchor12',
    itemNumber: '12',
    status: 'notPassed',
  }, {
    id: '13',
    title: 'Соборное уложение',
    href: '#anchor13',
    itemNumber: '13',
    status: 'notPassed',
  }],
}];

const themesShort: StudentRightSidebarMenuProps['themes'] = [
  {
    id: '1',
    title: 'Тема 1. Население и хозяйство России в XVI веке',
    href: '#anchor0',
    status: 'current',
    lessons: [{
      id: '1',
      title: 'Крестьяне и сельское хозяйство',
      href: '#anchor1',
      itemNumber: '1',
      status: 'passed',
    }, {
      id: '2',
      title: 'Казачество',
      href: '#anchor2',
      itemNumber: '2',
      status: 'passed',
    }, {
      id: '3',
      title: 'Городская жизнь и ремесло',
      href: '#anchor3',
      itemNumber: '3',
      status: 'current',
    }, {
      id: '4',
      title: 'Купечество и торговые отношения',
      href: '#anchor4',
      itemNumber: '4',
      status: 'notPassed',
    }, {
      id: '5',
      title: 'Денежная единица',
      href: '#anchor5',
      itemNumber: '5',
      status: 'notPassed',
    }],
  },
];

export const StudentRightSidebarMenuLong: Story = {
  name: 'Long',
  parameters: {
    layout: 'fullscreen',
  },
  render: () => <StudentLessonsMenu themes={themesLong} module={module} />,
};

export const StudentRightSidebarMenuMiddle: Story = {
  name: 'Middle',
  parameters: {
    layout: 'fullscreen',
  },
  render: () => <StudentLessonsMenu themes={themesMiddle} module={module} />,
};

export const StudentRightSidebarMenuShort: Story = {
  name: 'Short',
  parameters: {
    layout: 'fullscreen',
  },
  render: () => <StudentLessonsMenu themes={themesShort} module={module} />,
};
