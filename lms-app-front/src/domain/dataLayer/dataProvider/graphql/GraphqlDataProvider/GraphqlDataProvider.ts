import { ApolloClient } from '@apollo/client';

import {
  GetProfile_DpDocument,
  GetProfile_DpQuery,
} from '../../../../../generated/graphql';
import DataProviderInterface from '../../DataProviderInterface';
import { profileDtoSchema } from '../../dto/ProfileDto';

class GraphqlDataProvider implements DataProviderInterface {
  private readonly apolloClient: ApolloClient<unknown>;

  constructor(apolloClient: ApolloClient<unknown>) {
    this.apolloClient = apolloClient;
  }

  public fetchProfile: DataProviderInterface['fetchProfile'] = async () => {
    const me = await this.apolloClient.query<GetProfile_DpQuery>({
      query: GetProfile_DpDocument,
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    });

    if (!me.data || !me.data.myProfile) {
      return null;
    }

    const validationResult = profileDtoSchema.safeParse(me.data.myProfile);

    if (validationResult.success) {
      return validationResult.data;
    }

    console.error(validationResult.error);

    return null;
  };
}

export default GraphqlDataProvider;
