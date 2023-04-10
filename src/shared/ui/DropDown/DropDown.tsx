import { Fragment, memo, ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import { classNames } from 'shared/config/theme/lib/classNames';
import cls from './DropDown.module.scss';
import { DropdownDirection } from '../../types/ui';
import { Applink } from '../AppLink/Applink';

export interface DropdownItems {
  disabled?: boolean;
  content: ReactNode;
  onClick?: () => void;
  href?: string;
}

interface DropDownProps {
  className?: string;
  items: DropdownItems[];
  trigger: ReactNode;
  direction?: DropdownDirection;
}

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
