import { Fragment, memo } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import { classNames } from 'shared/config/theme/lib/classNames';
import cls from './ListBox.module.scss';
import { DropdownDirection } from '../../types/ui';
import { ListBoxProps } from './types';
import { HStack } from '../Stack/HStack/HStack';
import { Button } from '../Button/Button';

const mapDirectionClass: Record<DropdownDirection, string> = {
  'top left': cls.topLeft,
  'top right': cls.topRight,
  'bottom left': cls.bottomLeft,
  'bottom right': cls.bottomRight,
};

export const ListBox = memo(function ListBox({
  className,
  items,
  currentValue,
  defaultValue,
  onChange,
  readonly,
  direction = 'bottom left',
  label,
}: ListBoxProps) {
  const optionsClasses = [cls.options, mapDirectionClass[direction]];

  return (
    <HStack gap={'4'}>
      {label && <span>{`${label}>`}</span>}
      <HListbox
        as={'div'}
        className={classNames(cls.listBox, {}, [className])}
        value={currentValue}
        onChange={onChange}
        disabled={readonly}
      >
        <HListbox.Button className={cls.triggerButton}>
          <Button disabled={readonly}>{currentValue ?? defaultValue}</Button>
        </HListbox.Button>
        <HListbox.Options className={classNames('', {}, optionsClasses)}>
          {items
            && items.length > 0
            && items.map((item) => (
              <HListbox.Option as={Fragment} key={item.value} value={item.value} disabled={item.disabled}>
                {({ active, selected }) => (
                  <li className={classNames(cls.option, { [cls.active]: active, [cls.disabled]: item.disabled })}>
                    {item.content}
                  </li>
                )}
              </HListbox.Option>
            ))}
        </HListbox.Options>
      </HListbox>
    </HStack>
  );
});
