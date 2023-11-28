import * as React from 'react';
import { observer } from 'mobx-react-lite';
import ruRU from 'antd/lib/locale/ru_RU';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import { ConfigProvider, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import useStore from 'domain/modelLayer/store/useStore';
import { useInstance } from 'react-ioc';
import { FC } from 'react';
import getTheme from './antToken';
import RouterComponent from './RouterComponent';

const RootComponent: FC = () => {
  const apolloClient = useInstance(ApolloClient);
  const store = useStore();

  const {
    ready,
  } = store;

  if (!ready) {
    return (
      <Spin
        className="absolute top-1/2 left-1/2"
        size="large"
        indicator={<LoadingOutlined />}
      />
    );
  }

  return (
    <ConfigProvider
      locale={ruRU}
      theme={getTheme('light')}
    >
      <ApolloProvider client={apolloClient}>
        <RouterComponent />
      </ApolloProvider>
    </ConfigProvider>
  );
};

export default observer(RootComponent);
