import persist from 'mst-persist';
import { CoreStore, CoreStoreInstance } from './CoreStore';
import { Env } from './env.type';

export default class CoreStoreFactory {
  static create(env: Env): CoreStoreInstance {
    const StoreInstance = CoreStore.create({}, env);

    persist(
      'scrapper-store-auth',
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

    return StoreInstance;
  }
}
