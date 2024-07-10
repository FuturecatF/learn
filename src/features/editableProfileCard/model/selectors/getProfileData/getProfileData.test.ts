import { StateSchema } from '@/app/provider/StoreProvider';
import { COUNTRY } from '@/entities/Country';
import { CURRENCY } from '@/entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
  test('should return profile data', () => {
    const data = {
      username: 'admin',
      age: 666,
      country: COUNTRY.Russia,
      lastname: 'lastname',
      city: 'Moscow',
      currency: CURRENCY.USD,
      first: 'first',
    };

    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
