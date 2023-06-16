import React, { FC } from 'react';
import { Progress } from 'antd';
import styles from './LmsProgressLine.module.scss';

interface iLmsProgressLine {
  studentProgress: number,
  studentPlan: number,
  percentProgress: number,
}

const LmsProgressLine: FC<iLmsProgressLine> = (
  {
    studentProgress,
    studentPlan,
    percentProgress,
  },
) => (
  <div className={styles.LmsProgressLineWrap}>
    <div className={styles.LmsProgressLineTitle}>
      <p>Твой прогресс за сегодня:</p>
      <span>
        {studentProgress}
        {' '}
        из
        {' '}
        {studentPlan}
      </span>
    </div>
    <Progress percent={percentProgress} strokeColor="#A675E5" />
  </div>
);

export default LmsProgressLine;
