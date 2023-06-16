import {
  Instance, SnapshotIn, SnapshotOut, types as t,
} from 'mobx-state-tree';

import { AuthEntity } from './entities/AuthEntity';

export const AuthStore = t
  .model('AuthStore', {
    id: t.optional(t.identifier, 'AuthStore'),
    // метка что состояние хранилища восстановлено из сохраненного в localstorage
    hydrated: t.optional(t.boolean, false),
    auth: t.optional(AuthEntity, {}),
  })
  .actions((self) => ({
    setHydrated: (value: boolean) => {
      self.hydrated = value;
    },
  }));

export interface AuthStoreInstance extends Instance<typeof AuthStore> {
}

export interface AuthStoreModelSnapshotIn extends SnapshotIn<typeof AuthStore> {
}

export interface AuthStoreModelSnapshotOut extends SnapshotOut<typeof AuthStore> {
}
