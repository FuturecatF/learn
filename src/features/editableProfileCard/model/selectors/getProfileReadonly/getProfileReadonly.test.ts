import { StateSchema } from '@/app/provider/StoreProvider';
import { getProfileReadonly } from '../getProfileReadonly/getProfileReadonly';

describe('getProfileIsLoading.test', () => {
  test('should return isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
      },
    };
    expect(getProfileReadonly(state as StateSchema)).toBe(true);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileReadonly(state as StateSchema)).toBe(undefined);
  });
});
