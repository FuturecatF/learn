import { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/config/theme/lib/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets';
import {
  Button, ButtonSize, ButtonTheme, VStack,
} from 'shared';
import { useSelector } from 'react-redux';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/getSidebarItems';
import cls from './Sidebar.module.scss';

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
      <VStack gap="16" align="center" className={cls.links}>
        {sidebarItemsList.map((link) => (
          <SidebarItem key={link.path} item={link} collapsed={collapsed} />
        ))}
      </VStack>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher short={collapsed} />
      </div>
    </div>
  );
});
