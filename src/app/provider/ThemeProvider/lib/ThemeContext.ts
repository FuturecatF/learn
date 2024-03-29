import { createContext } from 'react';
import { ThemeContextProps } from 'app/provider/ThemeProvider/lib/types';

export const Theme = {
  LIGHT: 'app_light_theme',
  DARK: 'app_dark_theme',
  MONO: 'app_mono_theme',
} as const;

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
