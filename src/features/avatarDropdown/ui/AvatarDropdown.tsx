import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Avatar as AvatarDeprecated, DropDown as DropDownDeprecated } from '@/shared';
import { getUserAuthData, isUserAdmin, userActions } from '@/entities/User';
import { getRouteDashboard, getRouteProfile } from '@/shared/const/router';
import { ToggleFeatures } from '@/shared/lib/features';
import { DropDown } from '@/shared/ui/redesigned/Popups/ui/DropDown/DropDown';
import { Avatar } from '@/shared/ui/redesigned/Avatar';

export const AvatarDropdown = memo(function AvatarDropdown() {
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();
  const isAdmin = useSelector(isUserAdmin);

  const onLogoutHandler = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (!authData) {
    return null;
  }

  const items = [
    ...(isAdmin
      ? [
        {
          content: t<string>('dashboard'),
          href: getRouteDashboard(),
        },
      ]
      : []),
    {
      content: t<string>('profile'),
      href: getRouteProfile(authData.id),
    },
    {
      content: t<string>('signOut'),
      onClick: onLogoutHandler,
    },
  ];

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={<DropDown
        items={items}
        trigger={<Avatar src={authData.avatar} size={40} />}
      />}
      off={
        <DropDownDeprecated
          items={items}
          trigger={<AvatarDeprecated src={authData.avatar} size={30} />}
        />
      }
    />
  );
});
