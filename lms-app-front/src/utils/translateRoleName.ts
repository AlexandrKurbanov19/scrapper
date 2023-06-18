import { RoleNamesEnum } from '../domain/types';

const translateRoleName = (roleName: string): string => {
  switch (roleName) {
    case RoleNamesEnum.Administrator:
      return 'Администратор';
    case RoleNamesEnum.Client:
      return 'Клиент';
    case RoleNamesEnum.Guest:
      return 'Гость';
    default:
      console.error(`Неизвестное название роли ${roleName}`);
      return roleName;
  }
};

export default translateRoleName;
