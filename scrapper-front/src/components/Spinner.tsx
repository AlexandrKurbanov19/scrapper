import React, { FC, ReactElement } from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { SpinProps } from 'antd/lib/spin';

const antIcon = <LoadingOutlined spin size={40} />;

interface IProps extends SpinProps {
  spinning?: boolean;
  children: ReactElement | null;
}

const Spinner: FC<IProps> = (
  {
    spinning = false,
    children,
    ...rest
  },
) => {
  if (spinning) {
    return (
      <Spin
        indicator={antIcon}
        {...rest}
      >
        {children}
      </Spin>
    );
  }

  return children;
};

export default Spinner;
