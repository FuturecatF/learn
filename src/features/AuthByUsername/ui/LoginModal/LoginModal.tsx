import React, { Suspense } from 'react';
import { classNames } from 'shared/config/theme/lib/classNames';
import { Modal } from 'shared';
import { PageLoader } from 'widgets';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}
export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose} className={classNames('', {}, [className])} lazy>
    <Suspense fallback={<PageLoader />}>
      <LoginFormAsync />
    </Suspense>
  </Modal>
);
