import argsSchema from '../../custom-graphql/mutation/registration/argsSchema';
import getInvalidFieldsFromZodError from '../getInvalidFieldsFromZodError';

describe('getInvalidFieldsFromZodError', () => {
  it('can get error list', () => {
    const validationResult = argsSchema.safeParse({input: {}});

    expect(validationResult.success).toBe(false);

    if (validationResult.success === false) {
      expect(getInvalidFieldsFromZodError(validationResult.error)).toMatchSnapshot();
    }
  });
});
