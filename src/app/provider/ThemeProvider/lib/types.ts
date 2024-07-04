import { Theme } from 'app/provider/ThemeProvider/lib/ThemeContext';

export type ThemeType = ValueOf<typeof Theme>;

export interface ThemeContextProps {
  theme?: ThemeType;
  setTheme?: (theme: ThemeType) => void;
}
