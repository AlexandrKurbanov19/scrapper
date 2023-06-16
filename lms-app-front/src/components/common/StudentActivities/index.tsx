import React, { FC } from 'react';
import { Card } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import styles from './styles.module.scss';
import Title from './components/Title';
import Activity from './components/Activity';
import { ActivityInstance } from './types';

export type StudentActivitiesForDayProps = {
  activities: ActivityInstance[]
  currentDate: Dayjs
  changeToPrevDate: () => void
  changeToNextDate: () => void
};

const cardTitleToday = 'Занятия на день';
const statsData = '3/5';

const getActivityItems = (activities: ActivityInstance[]) => activities.map((activity) => (
  <Activity
    name={activity.name}
    description={activity.descriptionName}
    type={activity.type}
    progress={activity.progress}
  />
));

const getTitle = (date: Dayjs): string | null => (date.isSame(dayjs(), 'day') ? cardTitleToday : null);

const StudentActivities: FC<StudentActivitiesForDayProps> = ({
  currentDate,
  activities,
  changeToPrevDate,
  changeToNextDate,
}) => (
  <Card
    title={(
      <Title
        date={currentDate}
        titleText={getTitle(currentDate)}
        statsData={statsData}
        onChangeToPrevDate={changeToPrevDate}
        onChangeToNextDate={changeToNextDate}
      />
      )}
    className={styles.container}
  >
    {getActivityItems(activities)}
  </Card>
);

export default StudentActivities;
