import { Theme } from '@/shared/const/theme';

export type ThemeType = ValueOf<typeof Theme>;

export interface ThemeContextProps {
  theme?: ThemeType;
  setTheme?: (theme: ThemeType) => void;
}
