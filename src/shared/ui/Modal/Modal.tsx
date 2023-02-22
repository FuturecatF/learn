import React, {
  MouseEvent, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/config/theme/lib/classNames';
import { Portal } from 'shared';
import { useTheme } from 'app/provider/ThemeProvider';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = ({
  className, children, isOpen, onClose, lazy,
}: ModalProps) => {
  const { theme } = useTheme();
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      timerRef.current = setTimeout(() => {
        setIsOpening(true);
      }, ANIMATION_DELAY);
    }
  }, [isOpen]);

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);

      timerRef.current = setTimeout(() => {
        onClose();
        setIsOpening(false);
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onContentClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpening,
    [cls.isClosing]: isClosing,
  };

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeHandler();
      }
    },
    [closeHandler],
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  if (lazy && !isMounted) {
    return null;
  }
  return (
    <Portal>
      <div className={classNames(cls.modal, mods, ['app_modal', theme, className])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
