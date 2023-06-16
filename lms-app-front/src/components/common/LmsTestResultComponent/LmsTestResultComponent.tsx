import React, { FC } from 'react';
import { Button, Card, Image } from 'antd';
import success from 'assets/succesTest.svg';
import fail from 'assets/failTest.svg';
import styles from './LmsTestResultComponent.module.scss';

interface ILmsTestResultComponent {
  maxPoints: number,
  pointsReceived: number,
  passingScore: number,
  numberOfAttempts: number,
  countOfAttempts: number,
}

const LmsTestResultComponent: FC<ILmsTestResultComponent> = (
  {
    maxPoints,
    pointsReceived,
    passingScore,
    numberOfAttempts,
    countOfAttempts,
  },
) => (
  <div className={styles.testResult}>
    <div className={styles.resultCount}>
      <p>Результаты</p>

      <span className={styles.stepCount}>
        Попытка
        {' '}
        <span>
          {numberOfAttempts}
          {' '}
          из
          {' '}
          {countOfAttempts}
        </span>
      </span>
    </div>
    <Card title="Тест">
      {
          (maxPoints === pointsReceived) && (
            <div className={styles.maxPoints}>
              <Image preview={false} src={success} className={styles.icon} />
              <div className={styles.maxPointsWrap}>
                <p className={styles.maxPointsNums}>
                  <span className={styles.success}>{pointsReceived}</span>
                  {' '}
                  из
                  {' '}
                  {maxPoints}
                </p>
                <p className={styles.maxPointsText}>Круто! Ты прошел тест на высший балл</p>
                <Button type="primary" size="large">Перейти к практике</Button>
              </div>
            </div>
          )
        }
      {
          (pointsReceived > passingScore && maxPoints > pointsReceived) && (
            <div className={styles.maxPoints}>
              <Image preview={false} src={success} className={styles.icon} />
              <div className={styles.maxPointsWrap}>
                <p className={styles.maxPointsNums}>
                  <span className={styles.success}>{pointsReceived}</span>
                  {' '}
                  из
                  {' '}
                  {maxPoints}
                </p>
                <p className={styles.maxPointsText}>Ты сдал на проходной балл!</p>
                <div className={styles.maxPointsDescription}>
                  <p>Можешь прочитать теорию еще раз для закрепления и повторить сдачу теста</p>
                  <Button type="link" size="small">Вернуться к теории</Button>
                </div>
                <div className={styles.btnWrap}>
                  <Button type="primary" size="large">Принять результат</Button>
                  <Button type="default" size="large">Пройти тест еще раз</Button>
                </div>
              </div>
            </div>
          )
        }
      {
          (pointsReceived < passingScore) && (
            <div className={styles.maxPoints}>
              <Image preview={false} src={fail} className={styles.icon} />
              <div className={styles.maxPointsWrap}>
                <p className={styles.maxPointsNums}>
                  <span className={styles.fail}>{pointsReceived}</span>
                  {' '}
                  из
                  {' '}
                  {maxPoints}
                </p>
                <p className={styles.maxPointsText}>
                  {
                    numberOfAttempts
                      ? 'Увы! Ты не справился, попробуй еще раз.'
                      : 'Увы! Ты потратил все попытки на прохождение теста. \n'
                      + 'Ничего страшного, скоро с тобой свяжется куратор и скажет, что делать дальше.'
                  }

                </p>
                <div className={`${styles.maxPointsDescription} ${styles.repeatTheory}`}>
                  <p>Рекомендуем тебе ещё раз повторить теорию</p>
                  <Button type="link" size="small">Вернуться к теории</Button>
                </div>
                <div className={styles.btnWrap}>
                  <Button type="primary" size="large">
                    {
                      numberOfAttempts
                        ? 'Пройти тест еще раз'
                        : 'Посмотреть доступные занятия'
                    }
                  </Button>
                </div>
              </div>
            </div>
          )
        }
    </Card>
  </div>
);

export default LmsTestResultComponent;
