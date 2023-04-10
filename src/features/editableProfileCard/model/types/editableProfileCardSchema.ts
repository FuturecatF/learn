import { Profile } from 'entities/Profile';

export const VALIDATE_PROFILE_ERROR = {
  INCORRECT_USER_DATA: 'INCORRECT_USER_DATA',
  INCORRECT_AGE: 'INCORRECT_AGE',
  INCORRECT_COUNTRY: 'INCORRECT_COUNTRY',
  NO_DATA: 'NO_DATA',
  SERVER_ERROR: 'SERVER_ERROR',
} as const;

export type ValidateProfileError = ValueOf<typeof VALIDATE_PROFILE_ERROR>;

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateErrors?: ValidateProfileError[];
}
