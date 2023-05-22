import '../styles/globals.css';
import { ApolloProvider } from '@apollo/react-hooks';
import withData from '../utils/apollo';
import React from 'react';
import moment from "moment";
import ruRU from 'antd/lib/locale/ru_RU';
import {ConfigProvider} from "antd";
import CommonLayout from "../components/CommonLayout/CommonLayout";

moment.locale('ru');
const MyApp = ({ Component, pageProps, apollo }: any) => {
  return (
    <ConfigProvider locale={ruRU}>
      <ApolloProvider client={apollo}>
        <CommonLayout>
          <Component {...pageProps} />
        </CommonLayout>
      </ApolloProvider>
    </ConfigProvider>
  );
};

export default withData(MyApp);
