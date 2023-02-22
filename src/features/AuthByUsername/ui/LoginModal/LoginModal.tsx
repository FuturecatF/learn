import React from 'react';
import { classNames } from 'shared/config/theme/lib/classNames';
import { Modal } from 'shared';
import { LoginForm } from '../../ui/LoginForm/LoginForm';

import cls from './LoginModal.module.scss';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}
export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose} className={classNames(cls.loginModal, {}, [className])} lazy>
    <LoginForm />
  </Modal>
);
