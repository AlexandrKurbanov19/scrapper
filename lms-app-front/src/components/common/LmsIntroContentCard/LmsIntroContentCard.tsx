import React, { FC } from 'react';
import {
  Button, Card, Image,
} from 'antd';
import styles from './LmsIntroContentCard.module.scss';
import LmsVideoJsPlayer from '../../editors/ContentEditor/video/LmsVideoJsPlayer';

interface ILmsIntroContentCard {
  cardTitle: string,
  contentLeftTitle: string,
  contentLeftList: string[],
  contentRightImageUrl?: string,
  contentRightVideoUrl?: string,
  getStartTest?: () => void,
}
const LmsIntroContentCard: FC<ILmsIntroContentCard> = (
  {
    cardTitle,
    contentLeftTitle,
    contentLeftList,
    contentRightImageUrl,
    contentRightVideoUrl,
    getStartTest,

  },
) => (
  <Card
    className={styles.wrapperCard}
    title={(<h2 className={styles.title}>{cardTitle}</h2>)}
  >
    <div className="flex gap-[16px] flex-col md:flex-row">
      <div className={`${styles.contentLeft} order-last md:order-1`}>
        <div>
          <p className={styles.contentTitle}>{contentLeftTitle}</p>
          <ul className={styles.contentList}>
            {
              contentLeftList?.map((el) => (
                <li key={el}>{el}</li>
              ))
            }
          </ul>
        </div>
        <Button size="large" onClick={getStartTest} type="primary">Поехали!</Button>
      </div>
      <div className={`${styles.contentRight} order-1 md:order-last`}>
        {
          contentRightImageUrl && !contentRightVideoUrl && (
            <Image
              src={contentRightImageUrl}
              className={styles.contentRightImg}
              preview={false}
            />
          )
        }
        {
          contentRightVideoUrl && (
            <LmsVideoJsPlayer
              src={contentRightVideoUrl}
            />
          )
        }
      </div>
    </div>
  </Card>
);

export default LmsIntroContentCard;
