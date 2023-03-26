import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from 'app/provider/StoreProvider/config/StateSchema';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore } from '..';

interface StoreProviderProps {
  children: ReactNode;
  initialState?: StateSchema;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = ({ children, initialState, asyncReducers }: StoreProviderProps) => {
  const store = createReduxStore(initialState, asyncReducers as ReducersMapObject<StateSchema>);
  return <Provider store={store}>{children}</Provider>;
};
