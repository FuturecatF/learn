import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/config/theme/lib/classNames';
import {
  Applink,
  AppLinkTheme,
  Button,
  ButtonTheme,
  HStack,
  Text,
} from '@/shared';
import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import cls from './Navbar.module.scss';
import { getRouteArticlesCreate } from '@/shared/const/router';
import { ToggleFeatures } from '@/shared/lib/features';

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
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={
          <header className={classNames(cls.navbarRedesigned, { className })}>
            <HStack gap={'16'} className={cls.actions}>
              <NotificationButton />
              <AvatarDropdown />
            </HStack>
          </header>
        }
        off={
          <header className={classNames(cls.navbar, { className })}>
            <Text
              className={cls.appName}
              title={t<string>('FuturecatF App')}
            />
            <Applink
              variant={AppLinkTheme.SECONDARY}
              to={getRouteArticlesCreate()}
            >
              {t('createArticle')}
            </Applink>
            <HStack gap={'16'} className={cls.actions}>
              <NotificationButton />
              <AvatarDropdown />
            </HStack>
          </header>
        }
      />
    );
  }

  return (
    <header className={classNames(cls.navbar, { className })}>
      <Button
        className={cls.authButton}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={onOpenModal}
      >
        {t('signIn')}
      </Button>
      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      )}
    </header>
  );
});
