import {
  VALIDATE_PROFILE_ERROR,
  validateProfileData,
} from 'entities/Profile/model/services/validateProfileData/validateProfileData';
import { COUNTRY } from 'entities/Country';
import { CURRENCY } from 'entities/Currency';

const data = {
  username: 'admin',
  age: 666,
  country: COUNTRY.Russia,
  lastname: 'lastname',
  city: 'Moscow',
  currency: CURRENCY.USD,
  first: 'first',
};

jest.mock('axios');
describe('validateProfileData.test', () => {
  test('valid', async () => {
    const result = validateProfileData(data);
    expect(result).toEqual([]);
  });

  test('without first and lastname', async () => {
    const result = validateProfileData({ ...data, first: '', lastname: '' });
    expect(result).toEqual([VALIDATE_PROFILE_ERROR.INCORRECT_USER_DATA]);
  });
  test('incorrect age', async () => {
    const result = validateProfileData({ ...data, age: undefined });
    expect(result).toEqual([VALIDATE_PROFILE_ERROR.INCORRECT_AGE]);
  });
  test('incorrect country', async () => {
    const result = validateProfileData({ ...data, country: undefined });
    expect(result).toEqual([VALIDATE_PROFILE_ERROR.INCORRECT_COUNTRY]);
  });
  test('all incorrect', async () => {
    const result = validateProfileData({
      ...data,
      age: undefined,
      first: '',
      lastname: '',
      country: undefined,
    });

    expect(result).toEqual([
      VALIDATE_PROFILE_ERROR.INCORRECT_USER_DATA,
      VALIDATE_PROFILE_ERROR.INCORRECT_AGE,
      VALIDATE_PROFILE_ERROR.INCORRECT_COUNTRY,
    ]);
  });
});
