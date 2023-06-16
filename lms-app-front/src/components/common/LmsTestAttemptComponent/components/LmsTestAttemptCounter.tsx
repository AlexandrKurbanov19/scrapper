import React, { FC } from 'react';
import styles from './LmsTestAttemptCounter.module.scss';

interface ILmsTestAttemptCounter {
  count: number,
}

const LmsTestAttemptCounter: FC<ILmsTestAttemptCounter> = (
  {
    count,
  },
) => (
  <div className={styles.attemptCounterContainer}>
    <div className={styles.attemptCounterCount}>
      {count}
    </div>
    <div className={styles.attemptCounterText}>
      <p>Осталось</p>
      <p>попыток</p>
    </div>
  </div>
);

export default LmsTestAttemptCounter;
