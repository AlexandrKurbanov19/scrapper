import React, { FC } from 'react';
import { Button, Card } from 'antd';
import styles from './LmsTestAttemptComponent.module.scss';
import LmsTestAttemptItem from './components/LmsTestAttemptItem';
import LmsTestAttemptCounter from './components/LmsTestAttemptCounter';

interface IAttemptItem {
  maxPoints: number,
  receivedPoints: number,
  passingScore: number,
  attemptNumber: number,
  status: boolean,
}
interface ILmsTestAttemptComponent {
  cardTitle: string,
  testTitle: string,
  attemptList?: IAttemptItem[],
  remainingTries: number,
}

const LmsTestAttemptComponent: FC<ILmsTestAttemptComponent> = (
  {
    cardTitle,
    testTitle,
    attemptList,
    remainingTries,
  },
) => (
  <Card title={cardTitle} className={styles.testAttemptWrap}>
    <div className={styles.testAttemptContainer}>
      <p className={styles.testAttemptText}>{testTitle}</p>
      <div className={styles.attemptListContainer}>
        {
            attemptList?.map((el) => (
              <LmsTestAttemptItem
                key={JSON.stringify(el)}
                attemptItem={el}
              />
            ))
          }
        {
            remainingTries > 0 && (
              <LmsTestAttemptCounter count={remainingTries} />
            )
          }
      </div>
      {
          (!!attemptList?.length && remainingTries !== 0) && (
          <div className={styles.testAttemptBtnWrap}>
              {
                attemptList?.some((el) => el.status) ? (
                  <>
                    <Button type="primary" size="large">Принять результат</Button>
                    {
                      remainingTries !== 0 && (<Button type="default" size="large">Пройти тест еще раз</Button>)
                    }
                  </>
                ) : (
                  <Button type="primary" size="large">Пройти еще раз!</Button>
                )
              }
          </div>
          )
        }
    </div>
  </Card>
);

export default LmsTestAttemptComponent;
