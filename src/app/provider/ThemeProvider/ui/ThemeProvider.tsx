import { ReactNode, useEffect, useMemo, useState } from 'react';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
import { ThemeType } from '@/shared/types/sort';
import { useJsonSettings } from '@/entities/User';
import { Theme } from '@/shared/const/theme';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage';

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: ThemeType;
}

const ThemeProvider = ({ children, initialTheme }: ThemeProviderProps) => {
  const { theme: defaultTheme } = useJsonSettings();
  const [theme, setTheme] = useState<ThemeType>(
    initialTheme || defaultTheme || Theme.DARK,
  );
  const [isThemeInited, setIsThemeInited] = useState(false);

  useEffect(() => {
    if (!isThemeInited && defaultTheme) {
      setTheme(defaultTheme);
      setIsThemeInited(true);
    }
  }, [defaultTheme, isThemeInited]);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  }, [theme]);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme, setTheme],
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
