import { Theme, useTheme } from 'app/provider/ThemeProvider';
import { classNames } from 'shared/config/theme/lib/classNames';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button } from 'shared';
import { ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}
export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('', {}, [className])}>
      <Button onClick={toggleTheme} theme={ThemeButton.CLEAR}>
        {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
      </Button>
    </div>
  );
};
