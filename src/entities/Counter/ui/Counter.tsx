import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from 'entities/Counter';
import { Button } from 'shared';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button data-testid="increment-button" onClick={increment}>
        {'increment'}
      </Button>
      <Button data-testid="decrement-button" onClick={decrement}>
        {'decrement'}
      </Button>
    </div>
  );
};
