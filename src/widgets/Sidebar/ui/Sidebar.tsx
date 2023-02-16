import { useState } from 'react';
import { classNames } from 'shared/config/theme/lib/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets';
import {
  Button, ButtonTheme, ButtonSize, Applink, AppLinkTheme,
} from 'shared';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = async () => {
    setCollapsed((state) => !state);
  };
  return (
    <div data-testid="sidebar" className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
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
      <div className={cls.links}>
        <Applink to={RoutePath.main} className={cls.link} theme={AppLinkTheme.SECONDARY}>
          <MainIcon className={cls.icon} />
          {collapsed ? '' : 'Главная'}
        </Applink>
        <Applink to={RoutePath.about} className={cls.link} theme={AppLinkTheme.SECONDARY}>
          <AboutIcon className={cls.icon} />
          {collapsed ? '' : 'О сайте'}
        </Applink>
      </div>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher short={collapsed} />
      </div>
    </div>
  );
};
