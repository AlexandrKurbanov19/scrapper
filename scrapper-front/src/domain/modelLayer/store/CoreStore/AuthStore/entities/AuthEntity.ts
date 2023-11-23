import { autorun } from 'mobx';
import {
  addDisposer,
  applySnapshot, getEnv, Instance, SnapshotIn, SnapshotOut,
  types as t,
} from 'mobx-state-tree';
import { Env } from '../../env.type';

export const AuthEntity = t
  .model('AuthEntity', {
    token: t.maybe(t.string),
    userId: t.maybe(t.string),
  })
  .views(((self) => ({
    get hasAuthToken() {
      return !!self.token;
    },
  })))
  .actions((self) => ({
    clearState: () => {
      applySnapshot(self, {});
    },
    removeToken: () => {
      self.token = undefined;
    },
    setToken: (token: string | undefined) => {
      self.token = token;
    },
    setUserId: (userId: string | undefined) => {
      self.userId = userId;
    },
    afterCreate: () => {
      const { tokenProvider } = getEnv<Env>(self);

      addDisposer(self, autorun(() => {
        tokenProvider.setToken(self.token);
      }));
    },
  }));

export interface AuthEntityInstance extends Instance<typeof AuthEntity> {
}

export interface AuthEntitySnapshotIn extends SnapshotIn<typeof AuthEntity> {
}

export interface AuthEntitySnapshotOut extends SnapshotOut<typeof AuthEntity> {
}
