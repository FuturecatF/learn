import { useSelector } from 'react-redux';
import { StateSchema } from '@/app/provider/StoreProvider';

type Selector<T, Args extends any[]> = (state: StateSchema, ...args: Args) => T;
type Hook<T, Args extends any[]> = (...args: Args) => T;
type Result<T, Args extends any[]> = [Hook<T, Args>, Selector<T, Args>];

export function buildSelector<T, Args extends any[]>(
  selector: Selector<T, Args>,
): Result<T, Args> {
  const useSelectorHook: Hook<T, Args> = (...args: Args) =>
    useSelector((state: StateSchema) => selector(state, ...args));

  return [useSelectorHook, selector];
}
