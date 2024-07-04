import { Fragment, memo } from 'react';
import { Menu } from '@headlessui/react';
import { classNames } from 'shared/config/theme/lib/classNames';
import { Applink } from '../AppLink/Applink';
import { DropDownProps } from './types';
import cls from './DropDown.module.scss';
import type { DropdownDirection } from '../../types/ui';

const mapDirectionClass: Record<DropdownDirection, string> = {
  'top left': cls.topLeft,
  'top right': cls.topRight,
  'bottom left': cls.bottomLeft,
  'bottom right': cls.bottomRight,
};

export const DropDown = memo(function DropDown({
  className,
  items,
  trigger,
  direction = 'bottom left',
}: DropDownProps) {
  const menuClasses = [mapDirectionClass[direction]];
  return (
    <Menu as="div" className={classNames(cls.dropDown, {}, [className])}>
      <Menu.Button className={cls.button}>{trigger}</Menu.Button>
      <Menu.Items as="section" className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              key={item.href}
              onClick={item.onClick}
              className={classNames(cls.item, { [cls.active]: active })}
              type="button"
              disabled={item.disabled}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item as={Applink} to={item.href} disabled={item.disabled}>
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item as={Fragment} disabled={item.disabled}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
});
