import React, { FC } from 'react';
import smile from 'assets/smile.svg';
import sadness from 'assets/sadness.svg';
import { Image } from 'antd';
import styles from './LmsTestAttemptItem.module.scss';

interface IAttemptItem {
  maxPoints: number,
  receivedPoints: number,
  passingScore: number,
  attemptNumber: number,
  status: boolean,
}
interface ILmsTestAttemptItem {
  attemptItem: IAttemptItem,
}

const LmsTestAttemptItem: FC<ILmsTestAttemptItem> = (
  {
    attemptItem,
  },
) => (
  <div className={styles.testAttemptContainer}>
    <div className={`${styles.testAttemptImg} ${attemptItem?.status ? styles.smile : styles.sadness}`}>
      <Image preview={false} src={attemptItem?.status ? smile : sadness} />
    </div>
    <div className={styles.testAttemptText}>
      <p>
        Попытка
        {' '}
        {attemptItem.attemptNumber}
      </p>
      <span>
        Результат
        {' '}
        {attemptItem.receivedPoints}
        {' '}
        из
        {' '}
        {attemptItem.maxPoints}
      </span>
    </div>
  </div>
);

export default LmsTestAttemptItem;
