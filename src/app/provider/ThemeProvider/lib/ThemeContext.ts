import { createContext } from 'react';

export const Theme = {
  LIGHT: 'app_light_theme',
  DARK: 'app_dark_theme',
  MONO: 'app_mono_theme',
} as const;

type ValueOf<T> = T[keyof T];

export type ThemeType = ValueOf<typeof Theme>;

export interface ThemeContextProps {
  theme?: ThemeType;
  setTheme?: (theme: ThemeType) => void;
}
export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
