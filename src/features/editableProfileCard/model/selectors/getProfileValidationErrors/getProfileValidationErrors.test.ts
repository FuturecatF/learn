import { StateSchema } from 'app/provider/StoreProvider';
import { VALIDATE_PROFILE_ERROR } from 'features/editableProfileCard/model/consts';
import { getProfileValidationErrors } from '../getProfileValidationErrors/getProfileValidationErrors';

describe('getProfileValidationErrors.test', () => {
  test('should return validation errors', () => {
    const validateErrors = [VALIDATE_PROFILE_ERROR.SERVER_ERROR, VALIDATE_PROFILE_ERROR.INCORRECT_AGE];
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors,
      },
    };
    expect(getProfileValidationErrors(state as StateSchema)).toEqual(validateErrors);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidationErrors(state as StateSchema)).toBe(undefined);
  });
});
