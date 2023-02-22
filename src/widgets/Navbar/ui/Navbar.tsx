import { useState, useCallback } from 'react';
import { classNames } from 'shared/config/theme/lib/classNames';
import { Button, ButtonTheme, Modal } from 'shared';

import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  return (
    <div className={classNames(classes.navbar, { className })}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onOpenModal}>
        {t('signIn')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  );
};
