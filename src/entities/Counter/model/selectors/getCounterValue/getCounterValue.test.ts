import { StateSchema } from 'app/provider/StoreProvider';
import { getCounterValue } from '../../../model/selectors/getCounterValue/getCounterValue';

describe('getCounterValue', () => {
  test('should return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };
    expect(getCounterValue(state as StateSchema)).toEqual(10);
  });
});
