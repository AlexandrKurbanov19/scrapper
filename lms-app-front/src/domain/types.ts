import { z } from 'zod';

export enum RoleNamesEnum {
  Guest = 'Guest',
  Student = 'Student',
  Teacher = 'Teacher',
  Administrator = 'Administrator',
  Curator = 'Curator',
  Parent = 'Parent',
  Tutor = 'Tutor',
}

export const RoleNamesValues = [
  RoleNamesEnum.Guest,
  RoleNamesEnum.Student,
  RoleNamesEnum.Parent,
  RoleNamesEnum.Teacher,
  RoleNamesEnum.Curator,
  RoleNamesEnum.Tutor,
  RoleNamesEnum.Administrator,
] as const;

export type RoleName = typeof RoleNamesValues[number];

export const roleNameSchema = z.union([
  z.literal(RoleNamesEnum.Guest),
  z.literal(RoleNamesEnum.Student),
  z.literal(RoleNamesEnum.Parent),
  z.literal(RoleNamesEnum.Teacher),
  z.literal(RoleNamesEnum.Curator),
  z.literal(RoleNamesEnum.Tutor),
  z.literal(RoleNamesEnum.Administrator),
]);
