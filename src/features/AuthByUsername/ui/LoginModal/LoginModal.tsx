import React, { Suspense } from 'react';
import { classNames } from '@/shared/config/theme/lib/classNames';
import { Modal } from '@/shared';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { PageLoader } from '@/widgets/PageLoader';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({
  className,
  isOpen,
  onClose,
}: LoginModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose} className={classNames('', {}, [className])} lazy>
    <Suspense fallback={<PageLoader />}>
      <LoginFormAsync onSuccess={onClose} />
    </Suspense>
  </Modal>
);
