import {
  InMemoryCache,
  ApolloLink,
} from '@apollo/client';

import ApolloClientFactory from '../ApolloClientFactory';
import TokenProvider from '../TokenProvider';
import EventChannelsService from '../../serviceLayer/eventChannels/service/EventChannelsService';
import authenticationEventChannel from '../../serviceLayer/eventChannels/channels/authenticationEventChannel';

test('apollo client has correct default options', () => {
  const tp = new TokenProvider();
  const ec = new EventChannelsService(authenticationEventChannel);
  const client = ApolloClientFactory.create(tp, ec);

  expect(client.defaultOptions)
    .toEqual({ watchQuery: { fetchPolicy: 'network-only' } });
});

test('apollo client has in memory cache', () => {
  const tp = new TokenProvider();
  const ec = new EventChannelsService(authenticationEventChannel);
  const client = ApolloClientFactory.create(tp, ec);

  expect(client.cache).toBeInstanceOf(InMemoryCache);
});

test('apollo client has links', () => {
  const tp = new TokenProvider();
  const ec = new EventChannelsService(authenticationEventChannel);
  const client = ApolloClientFactory.create(tp, ec);

  expect(client.link).toBeInstanceOf(ApolloLink);
});
