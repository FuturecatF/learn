import { StateSchema } from '@/app/provider/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginPassword.test', () => {
  test('should return isLoading true', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        username: 'admin',
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('admin');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
