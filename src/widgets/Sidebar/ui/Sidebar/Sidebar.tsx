import { memo, useState } from 'react';
import { classNames } from 'shared/config/theme/lib/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets';
import { Button, ButtonSize, ButtonTheme } from 'shared';
import { SidebarItemList } from 'widgets/Sidebar/model/items';
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}
export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
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
        {SidebarItemList.map((link) => (
          <SidebarItem key={link.path} item={link} collapsed={collapsed} />
        ))}
      </div>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher short={collapsed} />
      </div>
    </div>
  );
});
