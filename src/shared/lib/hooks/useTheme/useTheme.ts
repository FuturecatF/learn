import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Theme } from '../../../const/theme';
import { ThemeType } from '../../../types/theme';

interface UseThemeResult {
  toggleTheme: (saveAction: (theme: ThemeType) => void) => void;
  theme: ThemeType;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = (saveAction: (theme: ThemeType) => void) => {
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
    saveAction?.(newTheme)
    // localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme: theme || Theme.MONO,
    toggleTheme,
  };
};
