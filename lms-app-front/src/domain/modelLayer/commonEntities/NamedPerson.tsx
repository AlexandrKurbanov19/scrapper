import {
  Instance,
  SnapshotIn, SnapshotOut,
  types as t,
} from 'mobx-state-tree';

export const NamedPerson = t
  .model('NamedPerson', {
    firstname: t.optional(t.string, ''),
    lastname: t.optional(t.string, ''),
    patronymic: t.optional(t.string, ''),
  })
  .views((self) => ({
    get fullName() {
      const parts = [
        self.lastname,
        self.firstname,
        self.patronymic,
      ].filter(Boolean);

      return parts.join(' ');
    },
    get avatarChars() {
      if (self.lastname.trim()) {
        return self.lastname.trim().charAt(0);
      }

      if (self.firstname.trim()) {
        return self.firstname.trim().charAt(0);
      }

      if (self.patronymic.trim()) {
        return self.patronymic.trim().charAt(0);
      }

      return '';
    },
  }));

export interface NamedPersonInstance extends Instance<typeof NamedPerson> {
}

export interface NamedPersonSnapshotIn extends SnapshotIn<typeof NamedPerson> {
}

export interface NamedPersonSnapshotOut extends SnapshotOut<typeof NamedPerson> {
}
