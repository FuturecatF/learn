import React, { ReactNode } from 'react';
import { classNames } from 'shared/config/theme/lib/classNames';
import { useTheme } from 'app/provider/ThemeProvider';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Modal = ({
  className, children, isOpen, onClose, lazy,
}: ModalProps) => {
  const { theme } = useTheme();

  const {
    isOpening, isMounted, isClosing, closeHandler,
  } = useModal({ onClose, isOpen, animationDelay: 300 });

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpening,
    [cls.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, ['app_modal', theme, className])}>
        <Overlay onclick={closeHandler} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
};
