import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Avatar, DropDown } from '@/shared';
import { getUserAuthData, isUserAdmin, userActions } from '@/entities/User';
import { getRouteDashboard, getRouteProfile } from '@/shared/const/router';

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

  return (
    <DropDown
      items={[
        ...(isAdmin ? [{ content: t<string>('dashboard'), href: getRouteDashboard() }] : []),
        { content: t<string>('profile'), href: getRouteProfile(authData.id) },
        { content: t<string>('signOut'), onClick: onLogoutHandler },
      ]}
      trigger={<Avatar src={authData.avatar} size={30} />}
    />
  );
});
