import { Button } from '@/shared';
import { useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const counterValue = useCounterValue();
  const { increment, decrement } = useCounterActions();

  const incrementHandler = () => {
    increment();
  };

  const decrementHandler = () => {
    decrement();
  };
  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button data-testid="increment-button" onClick={incrementHandler}>
        {'increment'}
      </Button>
      <Button data-testid="decrement-button" onClick={decrementHandler}>
        {'decrement'}
      </Button>
    </div>
  );
};
