import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/provider/StoreProvider';

export const getScrollRestore = (state: StateSchema) => state.scrollRestore.scroll;

export const getScrollByPath = createSelector(
  getScrollRestore,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0,
);
