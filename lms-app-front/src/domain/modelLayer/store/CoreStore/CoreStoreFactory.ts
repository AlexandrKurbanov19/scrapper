import persist from 'mst-persist';
import { CoreStore, CoreStoreInstance } from './CoreStore';
import { Env } from './env.type';

export default class CoreStoreFactory {
  static create(env: Env): CoreStoreInstance {
    const StoreInstance = CoreStore.create({}, env);

    // persist(
    //   'lms-last-values-form-modal',
    //   StoreInstance.lastFormValuesStore,
    //   {
    //     jsonify: true,
    //     whitelist: [ // перечисление ключей хранилища которые надо сохранять между сессиями
    //       'workId',
    //       'withoutWork',
    //       'maxPoint',
    //       'workTypeId',
    //     ],
    //   },
    // ).finally(() => {
    //   StoreInstance.lastFormValuesStore.setHydrated(true);
    // });

    persist(
      'lms-store-auth',
      StoreInstance.authStore,
      {
        jsonify: true,
        whitelist: [ // перечисление ключей хранилища которые надо сохранять между сессиями
          'auth',
        ],
      },
    ).finally(() => {
      StoreInstance.authStore.setHydrated(true);
    });

    // persist(
    //   'lms-store-journal-filter',
    //   StoreInstance.viewControllers.journalFilterViewController,
    //   {
    //     jsonify: true,
    //     whitelist: ['filter', 'filterType'],
    //   },
    // ).finally(() => {
    //   StoreInstance.viewControllers.journalFilterViewController.setHydrated(true);
    // });

    return StoreInstance;
  }
}
