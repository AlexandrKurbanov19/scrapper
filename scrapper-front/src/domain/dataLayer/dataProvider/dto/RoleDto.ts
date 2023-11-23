import { z } from 'zod';

import { roleNameSchema } from '../../../types';

export const roleDtoSchema = z.object({
  id: z.string(),
  name: roleNameSchema,
});

type RoleDto = z.infer<typeof roleDtoSchema>;

export default RoleDto;
