import { Applink, AppLinkTheme } from 'shared';
import { SidebarItemType } from 'widgets/Sidebar/model/items';

import { memo } from 'react';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed?: boolean;
}
export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => (
  <Applink to={item.path} className={cls.link} theme={AppLinkTheme.SECONDARY}>
    <item.Icon className={cls.icon} />
    {collapsed ? '' : item.text}
  </Applink>
));
