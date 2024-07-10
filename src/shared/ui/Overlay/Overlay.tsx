import React, { memo } from 'react';
import { classNames } from 'shared/config/theme/lib/classNames';
import cls from './Overlay.module.scss';

interface OverlayProps {
  className?: string;
  onclick?: () => void;
}
export const Overlay = memo(function Overlay({ className, onclick }: OverlayProps) {
  return (
    <div onClick={onclick} className={classNames(cls.overlay, {}, [className])} />
  );
});
