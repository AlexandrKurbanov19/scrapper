import { RoleNamesEnum } from '../domain/types';

const translateRoleName = (roleName: string): string => {
  switch (roleName) {
    case RoleNamesEnum.Administrator:
      return 'Администратор';
    case RoleNamesEnum.Curator:
      return 'Куратор';
    case RoleNamesEnum.Guest:
      return 'Гость';
    case RoleNamesEnum.Parent:
      return 'Родитель';
    case RoleNamesEnum.Student:
      return 'Студент';
    case RoleNamesEnum.Teacher:
      return 'Учитель';
    case RoleNamesEnum.Tutor:
      return 'Преподаватель';
    default:
      console.error(`Неизвестное название роли ${roleName}`);
      return roleName;
  }
};

export default translateRoleName;
