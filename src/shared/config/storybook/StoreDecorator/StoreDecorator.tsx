import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/provider/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (story: () => Story) =>
  <StoreProvider initialState={state as StateSchema}>{story()}</StoreProvider>;
