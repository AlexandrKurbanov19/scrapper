import React, { FC } from 'react';
import { Button, Card, Tag } from 'antd';
import styles from './LmsIntroActionCard.module.scss';

interface ILmsIntroActionCard {
  cardTitle: string,
  cardText: string,
  buttonText: string,
  progressStep?: string,
  attemptsNumber?: number,
  endDate?: Date,
  whatNext?: boolean,
  direction?: 'row' | 'col';
  fullScreenMode?: boolean,
}

const LmsIntroActionCard: FC<ILmsIntroActionCard> = (
  {
    cardTitle,
    cardText,
    attemptsNumber,
    buttonText,
    endDate,
    direction,
    fullScreenMode,
  },
) => (
  <div className={styles.containerActionCard}>
    <p className={fullScreenMode ? styles.whatNext : `${styles.whatNext} ${styles.active}`}>Что дальше?</p>
    <Card
      className={styles.wrapper}
      style={{ borderRadius: 16 }}
      title={<h3 className={styles.title}>{cardTitle}</h3>}
      extra={endDate && (<Tag color="#F759AB" style={{ borderRadius: 12, margin: 0 }}>Сдать до 4 июня</Tag>)}
    >
      <div className={direction === 'col' ? styles.col : styles.row}>
        <div className={styles.text}>
          <p>{cardText}</p>
          {
            attemptsNumber && (
              <p className={styles.attemptsText}>
                У тебя
                {' '}
                {attemptsNumber}
                {' '}
                {attemptsNumber > 1 ? 'попытки' : 'попытка'}
                !
              </p>
            )
          }
        </div>
        <Button size="large" className={styles.btn} type="primary">{buttonText}</Button>
      </div>
    </Card>
  </div>
);

export default LmsIntroActionCard;
