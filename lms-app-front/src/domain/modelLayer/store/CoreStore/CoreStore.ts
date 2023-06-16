import {
  addDisposer,
  getEnv,
  Instance,
  SnapshotIn,
  SnapshotOut,
  types as t,
} from 'mobx-state-tree';
import { reaction } from 'mobx';
import { ProfileStore } from './ProfileStore/ProfileStore';
import { AuthStore } from './AuthStore/AuthStore';
import { ViewControllersStore } from './viewController/ViewControllersStore';
import { Env } from './env.type';

/**
 * Самый верхний уровень дерева store
 */
export const CoreStore = t
  .model({
    authStore: t.optional(AuthStore, {}),
    profileStore: t.optional(ProfileStore, {}),
    viewControllers: t.optional(ViewControllersStore, {}),
  })
  .named('CoreStore')
  .views((self) => ({
    // метка что состояние хранилищ восстановлено из сохраненного в localstorage
    get hydrated() {
      return (
        self.authStore.hydrated
      );
    },
  }))
  .views((self) => ({
    get ready() {
      if (!self.hydrated) {
        return false;
      }

      // Если пользователь авторизовался но профиль ещё загрузился.
      if (self.authStore.auth.userId && !self.profileStore.profile?.id) {
        return false;
      }

      // Если пользователь не авторизовался но профиль ещё есть.
      if (self.authStore.auth.userId && !self.profileStore.profile?.id) {
        return false;
      }

      // if (self.profileStore.profile?.id) {
      //   // dictionaryStore требуется переинициализировать, он не готов
      //   return self.dictionaryStore.lastFetchForUserId === self.profileStore.profile.id;
      // }

      // dictionaryStore инициализирован и все данные загружены
      // return self.dictionaryStore.ready;
      return true;
    },
  }))
  .actions((self) => ({
    onLogout: () => {
      self.authStore.auth.clearState();
    },
  }))
  .actions((self) => ({
    on401ErrorEvent: () => {
      // setTimeout(() => {
      self.onLogout();
      window.location.reload();
      // }, 1000);
    },
  }))
  .actions((self) => ({
    afterCreate() {
      const { eventChannelsService: { authenticationEventChannel } } = getEnv<Env>(self);

      authenticationEventChannel.on('on401Error', self.on401ErrorEvent);

      addDisposer(
        self,
        () => {
          authenticationEventChannel.off('on401Error', self.on401ErrorEvent);
        },
      );

      // /**
      //  * Инициализация словарей приложения
      //  */
      // addDisposer(
      //   self,
      //   reaction(
      //     () => ({
      //       hydrated: self.hydrated,
      //       lastFetchForUserId: self.dictionaryStore.lastFetchForUserId,
      //       userId: self.profileStore.profile?.id || undefined,
      //     }),
      //     ({ hydrated, lastFetchForUserId, userId }) => {
      //       if (!hydrated) {
      //         return;
      //       }
      //
      //       if (lastFetchForUserId !== userId || !lastFetchForUserId) {
      //         self.dictionaryStore.init({ userId });
      //       }
      //     },
      //   ),
      // );

      /**
       * Инициализация профиля пользователя
       */
      addDisposer(
        self,
        reaction(
          () => ({
            hydrated: self.hydrated,
            userId: self.authStore.auth.userId,
          }),
          ({ hydrated }) => {
            if (!hydrated) {
              return;
            }

            self.profileStore.init();
          },
        ),
      );
    },
  }));

export interface CoreStoreInstance extends Instance<typeof CoreStore> {
}

export interface CoreStoreModelSnapshotIn extends SnapshotIn<typeof CoreStore> {
}

export interface CoreStoreModelSnapshotOut extends SnapshotOut<typeof CoreStore> {
}
