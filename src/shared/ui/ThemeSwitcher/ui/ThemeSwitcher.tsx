import { memo, useCallback } from 'react';
import { useTheme } from '@/app/provider/ThemeProvider';
import { classNames } from '@/shared/config/theme/lib/classNames';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import ThemeIcon from '@/shared/assets/icons/theme.svg';
import { Button, ButtonTheme } from '@/shared/ui/redesigned/Button/Button';
import { Theme } from '@/shared/const/theme';
import { Icon, useAppDispatch } from '@/shared';
import { saveJsonSettings } from '@/entities/User/model/services/saveJsonSettings';
import { ToggleFeatures } from '@/shared/lib/features';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  const dispatch = useAppDispatch();
  const onToggleHandler = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }));
    });
  }, [toggleTheme]);

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Icon
          Svg={ThemeIcon}
          height={40}
          width={40}
          onClick={onToggleHandler}
          clickable
        />
      }
      off={
        <div className={classNames('', {}, [className])}>
          <Button onClick={onToggleHandler} theme={ButtonTheme.CLEAR}>
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
          </Button>
        </div>
      }
    />
  );
});
