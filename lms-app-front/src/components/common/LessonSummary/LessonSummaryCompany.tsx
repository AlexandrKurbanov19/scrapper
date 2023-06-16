import React, { FC, useState } from 'react';
import { Card, Image } from 'antd';
import NextLessonImg from 'assets/nexLessImg.png';
import { OutputData } from '@editorjs/editorjs';
import styles from './LessonSummaryCompany.module.scss';
import ContentEditor from '../../editors/ContentEditor';

interface ILessonSummary {
  cardTitle: string,
  contentTitle: string,
  contentList: string[],
}

const LessonSummaryCompany: FC<ILessonSummary> = (
  {
    cardTitle,
    contentTitle,
    contentList,
  },
) => {
  const [content, setContent] = useState<OutputData | undefined>({
    time: 1550476186479,
    blocks: [{
      type: 'linkTool',
      data: {
        link: 'https://youtu.be/zzmYmY355AM',
        text: 'Что на самом деле ели в Древней Руси: блюда, которые Вас сильно удивят!',
      },
    },
    {
      type: 'attaches',
      data: {
        file: {
          url: 'https://s3.lms.el.school/lms/attachments/a94b1c2b-1f95-4e01-a558-4670f8dfd886.pdf',
          size: 12474244,
          name: 'hero.jpg',
          extension: 'pdf',
        },
        title: 'Как Петр окно в Европу прорубил.pdf',
      },
    }],
  });
  return (
    <Card
      className={styles.wrapperCard}
      title={(<h2 className={styles.title}>{cardTitle}</h2>)}
    >
      <div className={styles.contentWrapper}>
        <p className={styles.contentTitle}>{contentTitle}</p>
        <ul className={styles.contentList}>
          {
            contentList?.map((el) => (
              <li key={el}>{el}</li>
            ))
          }
        </ul>
      </div>
      <div className={styles.additionalInformation}>
        <p className={styles.additionalInformationText}>Если тебя заинтересовала эта тема, то лови еще информацию!</p>
        <ContentEditor
          value={content}
          onChange={setContent}
          readOnly
        />
        <div />
      </div>
      <div className={styles.inNextLessonContent}>
        <Image preview={false} src={NextLessonImg} />
        <div className={styles.inNextLessonTextWrap}>
          <p>В следующем уроке по истории ты узнаешь:</p>
          <p>Как появлялись первые школы для девушек в России и чему в них учили?</p>
        </div>
      </div>
    </Card>
  );
};

export default LessonSummaryCompany;
