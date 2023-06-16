import { Button } from 'antd';
import React, { FC, useCallback } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import styles from './styles.module.scss';

type DatePickerProps = {
  date: dayjs.ConfigType
  onChangeToPrevDate: () => void
  onChangeToNextDate: () => void
};

const DatePicker: FC<DatePickerProps> = ({
  date,
  onChangeToPrevDate,
  onChangeToNextDate,
}) => {
  const onChangeToPrevDateHandler = useCallback(() => {
    onChangeToPrevDate();
  }, [onChangeToPrevDate]);

  const onChangeToNextDateHandler = useCallback(() => {
    onChangeToNextDate();
  }, [onChangeToNextDate]);

  return (
    <div className={styles.container}>
      <Button
        icon={<LeftOutlined className={styles.buttonIcon} />}
        onClick={onChangeToPrevDateHandler}
        className={styles.buttonPrev}
      />
      <span className={styles.currentDateContainer}>
        {dayjs(date).locale('ru').format('D MMMM, dddd')}
      </span>
      <Button
        icon={<RightOutlined className={styles.buttonIcon} />}
        onClick={onChangeToNextDateHandler}
        className={styles.buttonNext}
      />
    </div>
  );
};

export default DatePicker;
