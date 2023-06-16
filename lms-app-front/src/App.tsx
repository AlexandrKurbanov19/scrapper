import 'reflect-metadata';

import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { connectReduxDevtools } from 'mst-middlewares';
import { ApolloClient } from '@apollo/client';
import { provider, toFactory } from 'react-ioc';
import moment from 'moment';

import 'moment/locale/ru';
import { FC } from 'react';
import RootComponent from './RootComponent';

import './App.scss';

import ErrorBoundary from './components/ErrorBoundary';
import { Store } from './domain/modelLayer/store/Store';
import { Env } from './domain/modelLayer/store/CoreStore/env.type';
import GraphqlDataProvider from './domain/dataLayer/dataProvider/graphql/GraphqlDataProvider/GraphqlDataProvider';
import TokenProvider from './domain/infrastructureLayer/TokenProvider';
import EventChannelsService from './domain/serviceLayer/eventChannels/service/EventChannelsService';
import EventChannelsServiceFactory from './domain/serviceLayer/eventChannels/service/EventChannelsServiceFactory';
import RepositoriesFactory from './domain/modelLayer/repositories/RepositoriesFactory';
import ApolloClientFactory from './domain/infrastructureLayer/ApolloClientFactory';

moment.locale('ru');

const App: FC = provider(
  [EventChannelsService, toFactory(
    () => EventChannelsServiceFactory.create(),
  )],
  [TokenProvider, toFactory(
    () => new TokenProvider(),
  )],
  [ApolloClient, toFactory(
    [TokenProvider, EventChannelsService],
    (tokenProvider: TokenProvider, eventChannelsService: EventChannelsService) => (
      ApolloClientFactory.create(tokenProvider, eventChannelsService)
    ),
  )],
  [GraphqlDataProvider, toFactory(
    [ApolloClient],
    (apolloClient: ApolloClient<unknown>) => new GraphqlDataProvider(apolloClient),
  )],
  [RepositoriesFactory, toFactory(
    [GraphqlDataProvider],
    (dataProvider: GraphqlDataProvider) => new RepositoriesFactory(dataProvider),
  )],
  [Store, toFactory(
    [
      EventChannelsService,
      TokenProvider,
      RepositoriesFactory,
    ],
    (
      eventChannelsService: EventChannelsService,
      tokenProvider: TokenProvider,
      repositoriesFactory: RepositoriesFactory,
    ) => {
      const env: Env = {
        tokenProvider,
        eventChannelsService,
        repositories: repositoriesFactory.create(),
      };

      const storeInstance = Store.create(env);

      // https://github.com/MargaretKrutikova/mst-react-ts-guide#connect-to-redux-devtools
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line import/no-extraneous-dependencies
        import('remotedev').then((remotedev) => {
          connectReduxDevtools(remotedev, storeInstance);
        });
      }

      return storeInstance;
    },
  )],
)(observer(() => (
  <ErrorBoundary>
    <RootComponent />
  </ErrorBoundary>
)));

export default App;
