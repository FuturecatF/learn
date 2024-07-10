import { useContext } from 'react';
import {
  LOCAL_STORAGE_THEME_KEY, ThemeContext, Theme,
} from '@/app/provider/ThemeProvider/lib/ThemeContext';
import { ThemeType } from '@/app/provider/ThemeProvider/lib/types';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: ThemeType;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme: ThemeType;
    switch (true) {
    case theme === Theme.DARK: {
      newTheme = Theme.MONO;
      break;
    }
    case theme === Theme.MONO: {
      newTheme = Theme.LIGHT;
      break;
    }
    case theme === Theme.LIGHT: {
      newTheme = Theme.DARK;
      break;
    }

    default: {
      newTheme = Theme.MONO;
    }
    }
    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme: theme || Theme.MONO, toggleTheme };
};
