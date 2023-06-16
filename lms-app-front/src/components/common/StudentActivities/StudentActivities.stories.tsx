import { Meta, StoryObj } from '@storybook/react';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/lib/locale/ru_RU';
import React, { useCallback, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import getTheme from '../../../antToken';
import StudentActivities from './index';

const decoratorStyles = {
  backgroundColor: 'grey',
  padding: 24,
};

const meta: Meta<typeof StudentActivities> = {
  title: 'StudentActivities',
  component: StudentActivities,
  args: {
    activities: [
      {
        id: '1',
        name: 'Население и хозяйство России в XVI веке',
        descriptionName: 'История',
        type: 'webinar',
        progress: 0,
        date: dayjs(),
      },
      {
        id: '2',
        name: 'Встреча с Татьяной Михалковой',
        descriptionName: 'Еженедельная встреча с куратором',
        type: 'meeting',
        progress: 10,
        date: dayjs(),
      },
      {
        id: '3',
        name: 'Что представляет собой Солнце? Как рождаются звезды',
        descriptionName: 'Астрономия',
        type: 'lesson',
        progress: 30,
        date: dayjs(),
      },
      {
        id: '4',
        name: 'Что представляет собой Солнце? Как рождаются звезды',
        descriptionName: 'Астрономия',
        type: 'lesson',
        progress: 30,
        date: dayjs(),
      },
    ],
  },
  decorators: [
    (Story) => (
      <ConfigProvider
        locale={ruRU}
        theme={getTheme('light')}
      >
        <div style={decoratorStyles}>
          <Story />
        </div>
      </ConfigProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof StudentActivities>;

export const ModalConfirmDefault: Story = {
  name: 'Default',
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentDate, setCurrentDate] = useState<Dayjs>(dayjs());

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const changeToPrevDate = useCallback(() => {
      setCurrentDate((prev) => prev.subtract(1, 'day'));
    }, [setCurrentDate]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const changeToNextDate = useCallback(() => {
      setCurrentDate((prev) => prev.add(1, 'day'));
    }, [setCurrentDate]);

    return (
      <StudentActivities
        {...args}
        currentDate={currentDate}
        changeToPrevDate={changeToPrevDate}
        changeToNextDate={changeToNextDate}
      />
    );
  },
};
