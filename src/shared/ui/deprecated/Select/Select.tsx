import { ChangeEvent, useMemo } from 'react';
import { classNames } from '@/shared/config/theme/lib/classNames';

import { SelectProps } from './types';
import cls from './Select.module.scss';

/**
 * @deprecated
 */
export const Select = <T extends string>({
  className, label, options, value, onChange, readonly,
}: SelectProps<T>) => {
  const optionList = useMemo(
    () =>
      options?.map((item) => (
        <option key={item.value} className={cls.option} value={item.value}>
          {item.content}
        </option>
      )),
    [options],
  );

  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value as T);
  };

  return (
    <div className={classNames(cls.wrapper, {}, [className])}>
      {label && <span className={cls.label}>{`${label}>`}</span>}
      <select disabled={readonly} className={cls.select} value={value}
        onChange={onChangeHandler}>
        {optionList}
      </select>
    </div>
  );
};
