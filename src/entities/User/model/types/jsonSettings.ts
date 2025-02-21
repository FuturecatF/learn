import { ThemeType } from '@/shared/types/theme';

export interface JsonSettings {
  theme?: ThemeType;
  isFirstVisit?: boolean;
  isArticlesPageWasOpened?: boolean;
}
