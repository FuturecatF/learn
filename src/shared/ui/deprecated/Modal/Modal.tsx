import React, { ReactNode, useEffect } from 'react';
import { classNames } from '@/shared/config/theme/lib/classNames';
import { useTheme } from '@/app/provider/ThemeProvider';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { Overlay } from '@/shared/ui/redesigned/Overlay/Overlay';
import { Portal } from '../../redesigned/Portal';
import cls from './Modal.module.scss';
import { toggleFeatures } from '@/shared/lib/features';

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

  useEffect(() => {
    if (!isOpen) {
      closeHandler();
    }
  }, [isOpen]);

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal element={document.getElementById('app') ?? document.body}>
      <div className={classNames(cls.modal, mods, ['app_modal', theme, className,  toggleFeatures({
        name: 'isAppRedesigned',
        on: () => cls.modalNew,
        off: () => cls.modalOld,
      }),])}>
        <Overlay onclick={closeHandler} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
};
