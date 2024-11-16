export const SORT_ORDER = {
  ASC: 'asc',
  DESC: 'desc',
} as const;
export type SortOrder = ValueOf<typeof SORT_ORDER>;
export { type ThemeType } from '../types/theme';
