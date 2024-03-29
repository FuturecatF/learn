import { Applink, AppLinkTheme } from 'shared';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { SidebarItemType } from '../../model/types/sidebar';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed?: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <Applink to={item.path} className={cls.link} theme={AppLinkTheme.SECONDARY}>
      <item.Icon className={cls.icon} />
      {collapsed ? '' : item.text}
    </Applink>
  );
});
