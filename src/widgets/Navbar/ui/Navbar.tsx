import { useState, useCallback, memo } from 'react';
import { classNames } from 'shared/config/theme/lib/classNames';
import {
  Applink, AppLinkTheme, Button, ButtonTheme, Text, TextVariant,
} from 'shared';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

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
        <Button className={cls.authButton} theme={ButtonTheme.CLEAR_INVERTED} onClick={onLogoutHandler}>
          {t('signOut')}
        </Button>
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
