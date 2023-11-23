import {
  Instance, SnapshotIn, SnapshotOut, types as t, flow, getEnv,
} from 'mobx-state-tree';
import { ApolloError } from '@apollo/client';
import { ServerError } from '@apollo/client/link/utils/throwServerError';

import { ProfileEntity, ProfileEntityInstance } from './entities/ProfileEntity';
import { Env } from '../env.type';

export const ProfileStore = t
  .model('ProfileStore', {
    id: t.optional(t.identifier, 'ProfileStore'),
    profile: t.maybeNull(ProfileEntity),
  })
  .actions((self) => ({
    // eslint-disable-next-line max-len
    fetchProfile: flow(function* fetchProfile(): Generator<Promise<ProfileEntityInstance | null>, void, ProfileEntityInstance | null> {
      const { repositories: { profileRepository } } = getEnv<Env>(self);

      const profile = yield profileRepository.fetchProfile();

      if (!profile) {
        self.profile = null;
        return;
      }

      self.profile = profile;
    }),
  }))
  .actions((self) => ({
    clearProfile: () => {
      self.profile = null;
    },
    init: flow(function* init(): Generator<Promise<void>, void, void> {
      const { eventChannelsService: { authenticationEventChannel } } = getEnv<Env>(self);
      yield self.fetchProfile();
      try {
        yield self.fetchProfile();
      } catch (error) {
        if (error instanceof ApolloError) {
          const serverError = error.networkError as ServerError;
          if (serverError.statusCode === 401) {
            console.error('serverError', serverError);
            authenticationEventChannel.emit('on401Error');
            return;
          }
        }
        console.error('Failed to fetchProfile', error);
        self.profile = null;
      }
    }),
  }));

export interface ProfileStoreInstance extends Instance<typeof ProfileStore> {
}

export interface ProfileStoreSnapshotIn extends SnapshotIn<typeof ProfileStore> {
}

export interface ProfileStoreSnapshotOut extends SnapshotOut<typeof ProfileStore> {
}
