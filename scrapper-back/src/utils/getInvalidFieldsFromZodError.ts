import { ZodError } from 'zod';

const getInvalidFieldsFromZodError = (zodError: ZodError) => (
  zodError.issues
    .map((issue) => issue.path.join('.'))
);

export default getInvalidFieldsFromZodError;
