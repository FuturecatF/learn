import { useState, useCallback } from 'react';
import { classNames } from 'shared/config/theme/lib/classNames';
import { Button, ButtonTheme, Modal } from 'shared';

import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
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
      <div className={classNames(classes.navbar, { className })}>
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onLogoutHandler}>
          {t('signOut')}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(classes.navbar, { className })}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onOpenModal}>
        {t('signIn')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  );
};
