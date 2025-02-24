import { StateSchema } from '@/app/provider/StoreProvider';
import { getCounter } from '../../../model/selectors/getCounter/getCounter';

describe('getCounter', () => {
  test('should return counter', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };
    expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
  });
});
