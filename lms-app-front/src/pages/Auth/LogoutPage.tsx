import React, { FC, useEffect } from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react-lite';
import { useApolloClient } from '@apollo/client';
import useStore from 'domain/modelLayer/store/useStore';

const LogoutPage: FC = () => {
  const client = useApolloClient();
  const store = useStore();

  const antIcon = <LoadingOutlined className="text-2xl" spin />;

  useEffect(() => {
    store.onLogout();
    client.stop();
    client.clearStore();
    window.location.reload();
  });

  return <Spin indicator={antIcon} />;
};

export default observer(LogoutPage);
