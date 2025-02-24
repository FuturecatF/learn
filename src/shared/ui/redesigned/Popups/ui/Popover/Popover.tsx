import React, { memo, ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';
import { DropdownDirection } from '@/shared/types/ui';
import { classNames } from '@/shared/config/theme/lib/classNames';
import { mapDirectionClass } from '../../styles/consts';
import cls from './Popover.module.scss';
import popupCls from '../../styles/popup.module.scss';

interface PopoverProps {
  className?: string;
  trigger: ReactNode;
  direction?: DropdownDirection;
  children: ReactNode;
}
export const Popover = memo(function MyPopover({
  className,
  trigger,
  direction = 'bottom left',
  children,
}: PopoverProps) {
  const menuClasses = [mapDirectionClass[direction], popupCls.menu];
  return (
    <HPopover className={classNames(cls.popover, {}, [className, popupCls.popup])}>
      <HPopover.Button as={'div'} className={popupCls.trigger}>{trigger}</HPopover.Button>

      <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>{children}</HPopover.Panel>
    </HPopover>
  );
});
