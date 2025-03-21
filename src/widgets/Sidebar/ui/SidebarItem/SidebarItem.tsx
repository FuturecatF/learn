import { memo } from 'react';
import { useSelector } from 'react-redux';
import {
  Applink as ApplinkDeprecated,
  AppLinkTheme,
} from '@/shared/ui/deprecated/AppLink';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '../../model/types/sidebar';
import cls from './SidebarItem.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Applink, Icon } from '@/shared';
import { classNames } from '@/shared/config/theme/lib/classNames';

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
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={
        <Applink
          to={item.path}
          className={classNames(cls.linkRedesigned, {
            [cls.collapsedRedesigned]: collapsed,
          })}
          variant={AppLinkTheme.PRIMARY}
          activeClassName={cls.active}
        >
          <Icon Svg={item.Icon} />
          <span>{collapsed ? '' : item.text}</span>
        </Applink>
      }
      off={
        <ApplinkDeprecated
          to={item.path}
          className={cls.link}
          variant={AppLinkTheme.PRIMARY}
        >
          <item.Icon className={cls.icon} />
          <span>{collapsed ? '' : item.text}</span>
        </ApplinkDeprecated>
      }
    />
  );
});
