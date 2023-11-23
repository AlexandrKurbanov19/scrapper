import {
  Instance,
  SnapshotIn, SnapshotOut,
  types as t,
} from 'mobx-state-tree';

import { RoleEntity } from './RoleEntity';
import { NamedPerson } from '../../../../commonEntities/NamedPerson';

export const BaseProfileEntity = NamedPerson
  .named('BaseProfileEntity')
  .props({
    id: t.string,
    email: t.string,
    role: RoleEntity,
    avatarUrl: t.maybeNull(t.string),
  });

export const ProfileEntity = BaseProfileEntity
  .named('ProfileEntity');

export interface ProfileEntityInstance extends Instance<typeof ProfileEntity> {
}

export interface ProfileEntitySnapshotIn extends SnapshotIn<typeof ProfileEntity> {
}

export interface ProfileEntitySnapshotOut extends SnapshotOut<typeof ProfileEntity> {
}
