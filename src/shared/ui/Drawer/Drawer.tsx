import React, { memo, ReactNode } from 'react';

import { useTheme } from 'app/provider/ThemeProvider';
import { classNames, Mods } from 'shared/config/theme/lib/classNames';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import { Overlay } from '../Overlay/Overlay';
import cls from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Drawer = memo(({
  className, children, onClose, isOpen, lazy,
}: DrawerProps) => {
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
      <div className={classNames(cls.drawer, mods, [className, theme, 'app_drawer'])}>
        <Overlay onclick={closeHandler} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
});
