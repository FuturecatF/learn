import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from 'app/provider/StoreProvider/config/StateSchema';
import { createReduxStore } from '..';

interface StoreProviderProps {
  children: ReactNode;
  initialState?: StateSchema;
}

export const StoreProvider = ({ children, initialState }: StoreProviderProps) => {
  const store = createReduxStore(initialState);
  return <Provider store={store}>{children}</Provider>;
};
