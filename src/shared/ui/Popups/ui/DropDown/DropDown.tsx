import { Fragment, memo } from 'react';
import { Menu } from '@headlessui/react';
import { classNames } from '@/shared/config/theme/lib/classNames';
import { Applink } from '../../../AppLink';
import { DropDownProps } from './types';
import cls from './DropDown.module.scss';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

export const DropDown = memo(function DropDown({
  className,
  items,
  trigger,
  direction = 'bottom left',
}: DropDownProps) {
  const menuClasses = [mapDirectionClass[direction]];
  return (
    <Menu as="div" className={classNames(popupCls.popup, {}, [className])}>
      <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
      <Menu.Items as="section" className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item, index) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              key={item.href}
              onClick={item.onClick}
              className={classNames(cls.item, { [popupCls.active]: active })}
              type="button"
              disabled={item.disabled}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item key={item.href} as={Applink} to={item.href} disabled={item.disabled}>
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item key={index} as={Fragment} disabled={item.disabled}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
});
