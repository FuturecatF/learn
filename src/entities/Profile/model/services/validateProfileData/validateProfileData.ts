import { Profile } from 'entities/Profile';

export const VALIDATE_PROFILE_ERROR = {
  INCORRECT_USER_DATA: 'INCORRECT_USER_DATA',
  INCORRECT_AGE: 'INCORRECT_AGE',
  INCORRECT_COUNTRY: 'INCORRECT_COUNTRY',
  NO_DATA: 'NO_DATA',
  SERVER_ERROR: 'SERVER_ERROR',
} as const;

export type ValidateProfileError = ValueOf<typeof VALIDATE_PROFILE_ERROR>;

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
