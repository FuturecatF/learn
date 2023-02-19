import { ReactNode, useMemo, useState } from 'react';
import {
  LOCAL_STORAGE_THEME_KEY, ThemeType, ThemeContext, Theme,
} from 'app/provider/ThemeProvider/lib/ThemeContext';

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
