import {
  Instance,
  SnapshotIn, SnapshotOut,
  types as t,
} from 'mobx-state-tree';
import { RoleNamesEnum, RoleNamesValues } from '../../../../../types';

export const RoleEntity = t
  .model({
    id: t.string,
    name: t.optional(
      t.enumeration('name', [...RoleNamesValues]),
      RoleNamesEnum.Guest,
    ),
  });

export interface IRoleModel extends Instance<typeof RoleEntity> {
}

export interface IRoleModelSnapshotIn extends SnapshotIn<typeof RoleEntity> {
}

export interface IRoleModelSnapshotOut extends SnapshotOut<typeof RoleEntity> {
}
