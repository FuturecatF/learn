import { useState, useCallback, memo } from 'react';
import { classNames } from 'shared/config/theme/lib/classNames';
import {
  Applink, AppLinkTheme, Avatar, Button, ButtonTheme, DropDown, Text, TextVariant,
} from 'shared';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, isUserAdmin, userActions } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { LoginModal } from 'features/AuthByUsername/ui/LoginModal/LoginModal';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onLogoutHandler = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <header className={classNames(cls.navbar, { className })}>
        <Text variant={TextVariant.INVERTED} className={cls.appName} title={t<string>('FuturecatF App')} />
        <Applink theme={AppLinkTheme.SECONDARY} to={RoutePath.article_create}>
          {t('createArticle')}
        </Applink>
        <DropDown
          className={cls.dropdown}
          items={[
            ...(isAdmin ? [{ content: t<string>('dashboard'), href: RoutePath.admin_panel }] : []),
            { content: t<string>('profile'), href: `${RoutePath.profile}/${authData.id}` },
            { content: t<string>('signOut'), onClick: onLogoutHandler },
          ]}
          trigger={<Avatar src={authData.avatar} size={30} />}
        />
      </header>
    );
  }

  return (
    <header className={classNames(cls.navbar, { className })}>
      <Button className={cls.authButton} theme={ButtonTheme.CLEAR_INVERTED} onClick={onOpenModal}>
        {t('signIn')}
      </Button>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
    </header>
  );
});
