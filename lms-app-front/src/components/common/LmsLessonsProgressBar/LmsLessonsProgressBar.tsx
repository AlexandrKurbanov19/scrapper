import React, { FC, useCallback } from 'react';
import { Collapse } from 'antd';
import { DownOutlined, LockOutlined, UpOutlined } from '@ant-design/icons';
import styles from './LmsLessonsProgressBar.module.scss';

const { Panel } = Collapse;

interface ILmsLessonsProgressBar {
  headerTitle: string,
  headerText: string,
  percentProgress: number,
}

const arrowTop = <UpOutlined style={{ color: '#713EDD' }} />;
const arrowDown = <DownOutlined style={{ color: '#713EDD' }} />;

const LmsLessonsProgressBar: FC<ILmsLessonsProgressBar> = (
  {
    headerTitle,
    headerText,
    percentProgress,
  },
) => {
  const customHeader = useCallback(() => (
    <p>
      <span className="font-semibold">
        {headerTitle}
        {' '}
      </span>
      <span>{headerText}</span>
    </p>
  ), [headerTitle, headerText]);

  return (
    <div className={`max-w-[856px] px-[8px] py-[4px] bg-[#D7FC6F] leading-[22px] rounded-[16px] ${styles.headerWrapper}`}>
      <Collapse
        ghost
        bordered={false}
        expandIcon={({ isActive }) => (isActive ? arrowTop : arrowDown)}
        expandIconPosition="end"
      >
        <Panel header={customHeader()} key={1}>
          <div className="flex justify-between pb-4 gap-[6px]">
            <div className="w-full flex justify-between items-center gap-2 max-w-[768px]">
              <div className={`${styles.step} ${percentProgress > 0 && styles.stepAnswer} ${percentProgress < 11 && percentProgress > 0 && styles.active}`}>
                <p className={styles.text}>
                  Теория
                  <LockOutlined className={styles.lock} />
                </p>
              </div>
              <div className={`${styles.step} ${percentProgress > 10 && styles.stepAnswer} ${percentProgress < 51 && percentProgress > 11 && styles.active}`}>
                <p className={styles.text}>
                  Тест
                  <LockOutlined className={styles.lock} />
                </p>
              </div>
              <div className={`${styles.step} ${percentProgress > 50 && styles.stepAnswer} ${percentProgress < 76 && percentProgress > 51 && styles.active}`}>
                <p className={styles.text}>
                  Практика
                  <LockOutlined className={styles.lock} />
                </p>
              </div>
              <div className={`${styles.step} ${percentProgress > 75 && styles.stepAnswer} ${percentProgress < 100 && percentProgress > 76 && styles.active}`}>
                <p className={styles.text}>
                  Закрепление
                  <LockOutlined className={styles.lock} />
                </p>
              </div>
            </div>
            <p className={styles.percent}>
              {percentProgress}
              %
            </p>
          </div>
        </Panel>
      </Collapse>
    </div>
  );
};

export default LmsLessonsProgressBar;
