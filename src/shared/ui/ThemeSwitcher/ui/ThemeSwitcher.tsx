import { useTheme } from 'app/provider/ThemeProvider';
import { classNames } from 'shared/config/theme/lib/classNames';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button } from 'shared';
import { Theme } from 'app/provider/ThemeProvider/lib/ThemeContext';
import { memo } from 'react';
import { ButtonTheme } from '../../Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}
export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('', {}, [className])}>
      <Button onClick={toggleTheme} theme={ButtonTheme.CLEAR}>
        {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
      </Button>
    </div>
  );
});
