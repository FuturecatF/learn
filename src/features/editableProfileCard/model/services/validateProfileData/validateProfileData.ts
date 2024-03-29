import { Profile } from 'entities/Profile/model/types/profile';
import { VALIDATE_PROFILE_ERROR, ValidateProfileError } from 'features/editableProfileCard/model/consts';

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [VALIDATE_PROFILE_ERROR.NO_DATA];
  }

  const {
    first, lastname, age, country,
  } = profile;

  const errors: ValidateProfileError[] = [];

  if (!first || !lastname) {
    errors.push(VALIDATE_PROFILE_ERROR.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(VALIDATE_PROFILE_ERROR.INCORRECT_AGE);
  }

  if (!country) {
    errors.push(VALIDATE_PROFILE_ERROR.INCORRECT_COUNTRY);
  }
  return errors;
};
