import { ReactNode, useEffect, useMemo, useState } from 'react';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
import { ThemeType } from '@/shared/types/sort';
import { useJsonSettings } from '@/entities/User';
import { Theme } from '@/shared/const/theme';

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
  console.log('theme', theme);
  useEffect(() => {
    if (!isThemeInited && defaultTheme) {
      setTheme(defaultTheme);
      setIsThemeInited(true);
    }
  }, [defaultTheme, isThemeInited]);

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
