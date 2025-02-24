import React, {
  memo, ReactNode, useCallback, useEffect,
} from 'react';

import { useTheme } from '@/app/provider/ThemeProvider';
import { classNames } from '@/shared/config/theme/lib/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { AnimationProvider, useAnimationLibs } from '@/shared/lib/components/AnimationProvider';
import { Overlay } from '../../redesigned/Overlay/Overlay';
import cls from './Drawer.module.scss';
import { Portal } from '../../redesigned/Portal';

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const height = window.innerHeight - 100;
/**
 * @deprecated
 */
const DrawerContent = memo(function DrawerContent({
  className, children, onClose, isOpen, lazy,
}: DrawerProps) {
  const { theme } = useTheme();
  const { Spring, Gesture } = useAnimationLibs();

  const [{ y }, api] = Spring.useSpring(() => ({ y: height }));
  const {
    isOpening, isMounted, isClosing, closeHandler,
  } = useModal({ onClose, isOpen, animationDelay: 300 });
  // const { Spring, Gesture } = useAnimationLibs();
  const mods: Record<string, boolean> = {
    [cls.opened]: isOpening,
    [cls.isClosing]: isClosing,
  };

  const openDrawer = useCallback(() => {
    api.start({ y: 0, immediate: false });
  }, [api]);

  useEffect(() => {
    if (isOpen) {
      openDrawer();
    }
  }, [api, isOpen, openDrawer]);

  const close = (velocity = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...Spring.config.stiff, velocity },
      onResolve: onClose,
    });
  };

  const bind = Gesture.useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      movement: [, my],
      // @ts-ignore
      cancel,
    }) => {
      if (my < -70) cancel();

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          close();
        } else {
          openDrawer();
        }
      } else {
        api.start({ y: my, immediate: true });
      }
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
    },
  );

  if (!isOpen) {
    return null;
  }

  const display = y.to((py) => (py < height ? 'block' : 'none'));

  return (
    <Portal>
      <div className={classNames(cls.drawer, mods, [className, theme, 'app_drawer'])}>
        <Overlay onclick={close} />
        <Spring.a.div
          className={cls.sheet}
          style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
          {...bind()}
        >
          {children}
        </Spring.a.div>
      </div>
    </Portal>
  );
});

const DrawerAsync = (props: DrawerProps) => {
  const { isLoaded } = useAnimationLibs();

  if (!isLoaded) {
    return null;
  }
  // eslint-disable-next-line react/destructuring-assignment
  return <DrawerContent {...props}>{props.children}</DrawerContent>;
};

export const Drawer = (props: DrawerProps) =>
  (
    <AnimationProvider>
      {/* eslint-disable-next-line react/destructuring-assignment */}
      <DrawerAsync {...props}>{props.children}</DrawerAsync>
    </AnimationProvider>
  );
