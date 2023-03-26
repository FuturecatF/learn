import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollRestoreSchema } from 'features/scrollRestore';

const initialState: ScrollRestoreSchema = {
  scroll: {},
};

export const scrollRestoreSlice = createSlice({
  name: 'scrollRestore',
  initialState,
  reducers: {
    setScrollPosition: (
      state,
      action: PayloadAction<{
        path: string;
        position: number;
      }>,
    ) => {
      state.scroll[action.payload.path] = action.payload.position;
    },
  },
});

export const { actions: scrollRestoreActions, reducer: scrollRestoreReducer } = scrollRestoreSlice;
