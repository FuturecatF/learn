import { useState, useCallback } from 'react';
import { classNames } from 'shared/config/theme/lib/classNames';
import { Button, ButtonTheme, Modal } from 'shared';

import { useTranslation } from 'react-i18next';
import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((state) => !state);
  }, []);

  return (
    <div className={classNames(classes.navbar, { className })}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onToggleModal}>
        {t('signIn')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal} />
    </div>
  );
};
