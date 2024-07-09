import { memo, useCallback } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Avatar, DropDown } from 'shared';
import { getUserAuthData, isUserAdmin, userActions } from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

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
        ...(isAdmin ? [{ content: t<string>('dashboard'), href: RoutePath.admin_panel }] : []),
        { content: t<string>('profile'), href: `${RoutePath.profile}/${authData.id}` },
        { content: t<string>('signOut'), onClick: onLogoutHandler },
      ]}
      trigger={<Avatar src={authData.avatar} size={30} />}
    />
  );
});
