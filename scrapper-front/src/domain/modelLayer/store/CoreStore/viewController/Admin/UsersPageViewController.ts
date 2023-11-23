import {
  Instance, SnapshotIn, SnapshotOut,
  types as t,
} from 'mobx-state-tree';

export const UsersPageViewController = t
  .model('UsersPageViewController', {
    id: t.optional(t.identifier, 'UsersPageViewController'),
  });

export interface UsersPageViewControllerInstance extends Instance<typeof UsersPageViewController> {
}

export interface UsersPageViewControllerSnapshotIn extends SnapshotIn<typeof UsersPageViewController> {
}

export interface UsersPageViewControllerSnapshotOut extends SnapshotOut<typeof UsersPageViewController> {
}
