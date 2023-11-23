import React, { FC, useEffect } from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react-lite';
import { useApolloClient } from '@apollo/client';
import useStore from 'domain/modelLayer/store/useStore';
import { useNavigate } from 'react-router-dom';
import { ABOUT_PAGE } from '../../routes';

const LogoutPage: FC = () => {
  const client = useApolloClient();
  const store = useStore();
  const navigate = useNavigate();

  const antIcon = <LoadingOutlined className="text-2xl" spin />;

  useEffect(() => {
    store.onLogout();
    client.stop();
    client.clearStore();
    navigate(ABOUT_PAGE);
  });

  return <Spin indicator={antIcon} />;
};

export default observer(LogoutPage);
