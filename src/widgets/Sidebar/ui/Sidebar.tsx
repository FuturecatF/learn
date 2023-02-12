import { useState } from 'react';
import { classNames } from 'shared/config/theme/lib/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets';
import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = async () => {
    setCollapsed((state) => !state);
  };
  return (
    <div data-testid="sidebar" className={classNames(classes.sidebar, { [classes.collapsed]: collapsed }, [className])}>
      <button data-testid="sidebar-toggle" type="button" onClick={onToggle}>
        {'toggle'}
      </button>

      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
};
