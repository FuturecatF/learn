import { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/config/theme/lib/classNames';
import {
  Applink, AppLinkTheme, Button, ButtonTheme, HStack, Text, TextVariant,
} from 'shared';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, isUserAdmin, userActions } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { LoginModal } from 'features/AuthByUsername/ui/LoginModal/LoginModal';
import { NotificationButton } from 'features/notificationButton';
import { AvatarDropdown } from 'features/avatarDropdown';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  if (authData) {
    return (
      <header className={classNames(cls.navbar, { className })}>
        <Text variant={TextVariant.INVERTED} className={cls.appName} title={t<string>('FuturecatF App')} />
        <Applink theme={AppLinkTheme.SECONDARY} to={RoutePath.article_create}>
          {t('createArticle')}
        </Applink>
        <HStack gap={'16'} className={cls.actions}>
          <NotificationButton />
          <AvatarDropdown />
        </HStack>

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
