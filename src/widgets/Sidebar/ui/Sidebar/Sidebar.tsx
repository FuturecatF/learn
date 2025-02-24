import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { classNames } from '@/shared/config/theme/lib/classNames';
import { Button, ButtonSize, ButtonTheme, Icon, VStack } from '@/shared';
import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher';
import { LanguageSwitcher } from '../../../LanguageSwitcher/index';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/getSidebarItems';
import cls from './Sidebar.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemsList = useSelector(getSidebarItems);

  const onToggle = useCallback(async () => {
    setCollapsed((state) => !state);
  }, []);

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={
        <div
          data-testid="sidebar"
          className={classNames(
            cls.sidebarRedesigned,
            { [cls.collapsedRedesigned]: collapsed },
            [className],
          )}
        >
          <AppLogo size={collapsed ? 30 : 50} className={cls.appLogo} />
          <VStack gap="16" className={cls.links}>
            {sidebarItemsList.map((link) => (
              <SidebarItem key={link.path} item={link} collapsed={collapsed} />
            ))}
          </VStack>
          <Icon
            className={cls.collapseBtn}
            data-testid="sidebar-toggle"
            onClick={onToggle}
            Svg={ArrowIcon}
            clickable
          />
          <div className={cls.switchers}>
            <ThemeSwitcher />
            <LanguageSwitcher short={collapsed} className={cls.lang} />
          </div>
        </div>
      }
      off={
        <div
          data-testid="sidebar"
          className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
            className,
          ])}
        >
          <Button
            className={cls.collapseBtn}
            theme={ButtonTheme.BACKGROUND_INVERTED}
            data-testid="sidebar-toggle"
            onClick={onToggle}
            size={ButtonSize.L}
            square
          >
            {collapsed ? '>' : '<'}
          </Button>

          <div className={cls.switchers}>
            <ThemeSwitcher />
            <LanguageSwitcher short={collapsed} />
          </div>
        </div>
      }
    />
  );
});
