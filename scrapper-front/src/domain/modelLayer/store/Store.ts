import { Instance } from 'mobx-state-tree';

import { CoreStore } from './CoreStore/CoreStore';
import CoreStoreFactory from './CoreStore/CoreStoreFactory';
import { Env } from './CoreStore/env.type';

export class Store {
  static create(env: Env) {
    return CoreStoreFactory.create(env);
  }
}

export interface Store extends Instance<typeof CoreStore> {
}
