import {
  ApolloClient, InMemoryCache, NormalizedCacheObject, from, HttpLink,
} from '@apollo/client';
import fetch from 'cross-fetch';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { getApiBase } from '../../env';
import { ITokenProvider } from './TokenProvider';
import EventChannelsService from '../serviceLayer/eventChannels/service/EventChannelsService';

const API_BASE = getApiBase();

export const createErrorLink = (
  getApolloClient: () => ApolloClient<NormalizedCacheObject>,
  eventChannelsService: EventChannelsService,
) => onError(({ graphQLErrors, networkError, operation }) => {
  const { response } = operation.getContext();

  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => (
      // eslint-disable-next-line no-console
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      )
    ));
  }

  if (networkError) {
    // eslint-disable-next-line no-console
    console.log(`[Network error]: ${networkError}`);
  }

  if (response && response.status === 401) {
    // eslint-disable-next-line no-console
    console.log(401);
    const apolloClient = getApolloClient();

    if (apolloClient) {
      apolloClient.stop();
      apolloClient.resetStore();
      eventChannelsService.authenticationEventChannel.emit('on401Error');
    }
  }
});

export const createAuthLink = (tokenProvider: ITokenProvider) => (
  setContext((_, { headers }) => {
    if (!tokenProvider.token) {
      return headers;
    }

    return {
      headers: {
        ...headers,
        authorization: tokenProvider.token ? `Bearer ${tokenProvider.token}` : '',
      },
    };
  })
);

export const createHttpLink = () => new HttpLink({
  uri: `${API_BASE}/graphql`,
  fetch,
});

class ApiClientFactory {
  static apolloClient: ApolloClient<NormalizedCacheObject>;

  static getApolloClient(): ApolloClient<NormalizedCacheObject> {
    return this.apolloClient;
  }

  static create(tokenProvider: ITokenProvider, eventChannelsService: EventChannelsService) {
    this.apolloClient = new ApolloClient({
      link: from([
        createErrorLink(this.getApolloClient.bind(this), eventChannelsService),
        createAuthLink(tokenProvider),
        createHttpLink(),
      ]),
      cache: new InMemoryCache({
        // https://www.apollographql.com/docs/react/caching/cache-field-behavior/
        typePolicies: {
          Parent: {
            merge: true,
          },
          Student: {
            merge: true,
          },
        },
      }),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: 'network-only',
        },
      },
    });

    return this.apolloClient;
  }
}

export default ApiClientFactory;
