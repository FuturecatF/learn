import { fetchProfileData, updateProfileData } from 'entities/Profile';

import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { COUNTRY } from 'entities/Country';
import { CURRENCY } from 'entities/Currency';
import { VALIDATE_PROFILE_ERROR } from 'entities/Profile/model/services/validateProfileData/validateProfileData';

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
describe('updateProfileData.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk();
    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([VALIDATE_PROFILE_ERROR.SERVER_ERROR]);
  });

  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, lastname: undefined },
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([VALIDATE_PROFILE_ERROR.INCORRECT_USER_DATA]);
  });
});
