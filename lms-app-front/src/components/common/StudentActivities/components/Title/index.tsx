import React, { FC } from 'react';
import { Dayjs } from 'dayjs';
import styles from './styles.module.scss';
import DatePicker from '../DatePicker';

type TitleProps = {
  date: Dayjs
  titleText: string | null
  statsData: string
  onChangeToPrevDate: () => void
  onChangeToNextDate: () => void
};

const Title: FC<TitleProps> = ({
  date,
  titleText,
  statsData,
  onChangeToPrevDate,
  onChangeToNextDate,
}) => (
  <div className={styles.container}>
    <div className={styles.titleContainer}>
      {titleText && (
        <span className={styles.title}>{titleText}</span>
      )}
      <span className={styles.stats}>{statsData}</span>
    </div>
    <div className={styles.datePicker}>
      <DatePicker
        date={date}
        onChangeToPrevDate={onChangeToPrevDate}
        onChangeToNextDate={onChangeToNextDate}
      />
    </div>
  </div>
);

export default Title;
