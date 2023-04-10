import { COUNTRY } from 'entities/Country';
import { CURRENCY } from 'entities/Currency';
import { profileActions, profileReducer } from '../slice/profileSlice';
import { ProfileSchema, VALIDATE_PROFILE_ERROR } from '../types/editableProfileCardSchema';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data = {
  username: 'admin',
  age: 666,
  country: COUNTRY.Russia,
  lastname: 'lastname',
  city: 'Moscow',
  currency: CURRENCY.USD,
  first: 'first',
  id: '1',
};

describe('profileSlice.test', () => {
  test('test setReadonly', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
    };
    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({
      readonly: true,
    });
  });
  test('test cancelEdit', () => {
    const state: DeepPartial<ProfileSchema> = {
      data,
      form: data,
      readonly: false,
      validateErrors: [],
    };
    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
      readonly: true,
      validateErrors: undefined,
      data,
      form: data,
    });
  });

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [VALIDATE_PROFILE_ERROR.SERVER_ERROR],
    };
    expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      validateErrors: [VALIDATE_PROFILE_ERROR.SERVER_ERROR],
    };
    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ''))).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      form: data,
      data,
    });
  });
});
