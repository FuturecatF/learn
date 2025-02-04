import { ReactNode, useMemo, useState } from 'react';
import {
  ThemeContext,
} from '@/shared/lib/context/ThemeContext';
import { Theme } from '@/shared/const/theme';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage';
import { ThemeType } from '@/shared/types/sort';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeType) || Theme.DARK;

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: ThemeType;
}
const ThemeProvider = ({ children, initialTheme }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>(initialTheme || defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme, setTheme],
  );

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
