import { z } from 'zod';
import { roleDtoSchema } from './RoleDto';

export const profileDtoSchema = z.object({
  id: z.string(),
  email: z.string(),
  firstname: z.optional(z.nullable(z.string())),
  lastname: z.optional(z.nullable(z.string())),
  patronymic: z.optional(z.nullable(z.string())),
  avatarUrl: z.optional(z.nullable(z.string())),
  role: roleDtoSchema,
});

type ProfileDto = z.infer<typeof profileDtoSchema>;

export default ProfileDto;
