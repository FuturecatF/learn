import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from 'app/provider/StoreProvider/config/StateSchema';
import { counterReducer } from 'entities/Counter';

export const createReduxStore = (initialState?: StateSchema) =>
  configureStore<StateSchema>({
    reducer: {
      counter: counterReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
