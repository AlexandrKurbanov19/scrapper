import { z } from 'zod';

export enum RoleNamesEnum {
  Guest = 'Guest',
  Client = 'Client',
  Administrator = 'Administrator',
}

export const RoleNamesValues = [
  RoleNamesEnum.Guest,
  RoleNamesEnum.Client,
  RoleNamesEnum.Administrator,
] as const;

export type RoleName = typeof RoleNamesValues[number];

export const roleNameSchema = z.union([
  z.literal(RoleNamesEnum.Guest),
  z.literal(RoleNamesEnum.Client),
  z.literal(RoleNamesEnum.Administrator),
]);
