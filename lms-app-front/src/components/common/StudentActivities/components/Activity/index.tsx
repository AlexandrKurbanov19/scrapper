import {
  Button, Card, Progress, Space,
} from 'antd';
import React, { FC, ReactNode } from 'react';
import {
  ClockCircleFilled, PlayCircleFilled, ReadOutlined, RightOutlined,
} from '@ant-design/icons';
import { neverCheck } from 'utils/utils';
import cn from 'classnames';
import styles from './styles.module.scss';
import { ActivityType } from '../../types';

type ActivityProps = {
  progress: number
  name: string
  description: string
  type: ActivityType
};

const getActivityTypeIcon = (type: ActivityType): ReactNode => {
  switch (type) {
    case 'meeting':
      return <ClockCircleFilled />;
    case 'webinar':
      return <PlayCircleFilled />;
    case 'lesson':
      return <ReadOutlined />;
    default:
      neverCheck(type);
      return null;
  }
};

const getActivityNameByType = (type: ActivityType) => {
  switch (type) {
    case 'meeting':
      return 'Запланированные встречи';
    case 'webinar':
      return 'Вебинар';
    case 'lesson':
      return 'Урок';
    default:
      neverCheck(type);
      return null;
  }
};

const Activity: FC<ActivityProps> = ({
  progress,
  name,
  description,
  type,
}) => (
  <Card className={styles.container}>
    <Space className="flex justify-between">
      <div className={styles.activityData}>
        <Progress size={78} type="circle" percent={progress} className={styles.progress} />
        <div className={styles.containerText}>
          <span className={styles.activityName}>{name}</span>
          <span className={styles.activityDescription}>{description}</span>
          <div className={cn([
            styles.activityTypeContainer,
            styles?.[type],
          ])}
          >
            {getActivityTypeIcon(type)}
            <span>{getActivityNameByType(type)}</span>
          </div>
        </div>
      </div>
      <Button type="primary" icon={<RightOutlined />} className={styles.toActivityButton} />
    </Space>
  </Card>
);

export default Activity;
