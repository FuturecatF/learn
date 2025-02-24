import { Fragment, memo } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import { classNames } from '@/shared/config/theme/lib/classNames';
import popupCls from '../../styles/popup.module.scss';
import cls from './ListBox.module.scss';
import { ListBoxProps } from './types';
import { HStack } from '../../../../redesigned/Stack/HStack/HStack';
import { Button } from '../../../../redesigned/Button/Button';
import { mapDirectionClass } from '../../styles/consts';

/**
 *
 * @deprecated
 * */
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
        className={classNames(cls.listBox, {}, [className, popupCls.popup])}
        value={currentValue}
        onChange={onChange}
        disabled={readonly}
      >
        <HListbox.Button className={popupCls.trigger}>
          <Button disabled={readonly}>{currentValue ?? defaultValue}</Button>
        </HListbox.Button>
        <HListbox.Options className={classNames('', {}, optionsClasses)}>
          {items &&
            items.length > 0 &&
            items.map((item) => (
              <HListbox.Option
                as={Fragment}
                key={item.value}
                value={item.value}
                disabled={item.disabled}
              >
                {({ active, selected }) => (
                  <li
                    className={classNames(cls.option, {
                      [popupCls.active]: active,
                      [popupCls.disabled]: item.disabled,
                    })}
                  >
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
