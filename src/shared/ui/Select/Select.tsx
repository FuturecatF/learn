import { classNames } from 'shared/config/theme/lib/classNames';

import { ChangeEvent, memo, useMemo } from 'react';
import { SelectProps } from './types';
import cls from './Select.module.scss';

export const Select = memo(({
  className, label, options, value, onChange, readonly,
}: SelectProps) => {
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
    onChange?.(event.target.value);
  };

  return (
    <div className={classNames(cls.wrapper, {}, [className])}>
      {label && <span className={cls.label}>{`${label}>`}</span>}
      <select disabled={readonly} className={cls.select} value={value} onChange={onChangeHandler}>
        {optionList}
      </select>
    </div>
  );
});
