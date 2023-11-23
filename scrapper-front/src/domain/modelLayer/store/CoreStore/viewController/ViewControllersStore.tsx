import {
  Instance, SnapshotIn, SnapshotOut, types as t,
} from 'mobx-state-tree';

import { UsersPageViewController } from './Admin/UsersPageViewController';

export const ViewControllersStore = t
  .model('ViewControllersStore', {
    usersPageViewController: t.late(() => t.optional(UsersPageViewController, {})),
  });

export interface ViewControllersStoreInstance extends Instance<typeof ViewControllersStore> {
}

export interface ViewControllersStoreSnapshotIn extends SnapshotIn<typeof ViewControllersStore> {
}

export interface ViewControllersStoreSnapshotOut extends SnapshotOut<typeof ViewControllersStore> {
}
