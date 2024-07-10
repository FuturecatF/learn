import { StateSchema } from '@/app/provider/StoreProvider';
import { COUNTRY } from '@/entities/Country';
import { CURRENCY } from '@/entities/Currency';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

describe('getProfileForm.test', () => {
  test('should return form data', () => {
    const form = {
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
        form,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(form);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
