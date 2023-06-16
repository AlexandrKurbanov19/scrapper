import React, {
  FC,
  useEffect,
} from 'react';
import { Button } from 'antd';
import { FullScreenProps } from './types/IFullScreen';
import styles from './FullScreen.module.scss';
import IconClose from '../../../assets/closeIcon.svg';

const FullScreen: FC<FullScreenProps> = (
  {
    handle,
    onChange,
    children,
    className,
  },
) => {
  const classNames = [];
  if (className) {
    classNames.push(className);
  }

  classNames.push('fullscreen');

  if (handle.active) {
    classNames.push('fullscreen-enabled');
  }

  useEffect(() => {
    if (onChange) {
      onChange(handle.active, handle);
    }
  }, [handle, onChange]);

  return (
    <div
      className={`${styles.contentCenter} ${styles.hideScroll} ${classNames.join(' ')}`}
      ref={handle.node}
      style={handle.active ? { height: '100%', width: '100%' } : undefined}
    >
      {handle.active && (
      <Button
        type="ghost"
        className={styles.closeIcon}
        onClick={handle.exit}
        icon={<img src={IconClose} alt="Закрыть" />}
      />
      )}
      {children}

    </div>
  );
};
export default FullScreen;
