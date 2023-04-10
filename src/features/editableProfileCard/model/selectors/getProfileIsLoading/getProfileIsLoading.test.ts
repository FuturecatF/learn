import { StateSchema } from 'app/provider/StoreProvider';
import { getProfileIsLoading } from '../getProfileIsLoading/getProfileIsLoading';

describe('getProfileIsLoading.test', () => {
  test('should return isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    };
    expect(getProfileIsLoading(state as StateSchema)).toBe(true);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileIsLoading(state as StateSchema)).toBe(undefined);
  });
});
