import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/config/theme/lib/classNames';
import { ListBox, Select } from '@/shared';
import { memo, useCallback } from 'react';
import { CURRENCY, CurrencyType } from '../../model/types/currency';

interface CurrencySelectProps {
  className?: string;
  value?: CurrencyType;
  onChange?: (value: CurrencyType) => void;
  readonly?: boolean;
}

const options = [
  { value: CURRENCY.RUB, content: CURRENCY.RUB },
  { value: CURRENCY.USD, content: CURRENCY.USD },
  { value: CURRENCY.EUR, content: CURRENCY.EUR },
];

export const CurrencySelect = memo(({
  className, value, onChange, readonly,
}: CurrencySelectProps) => {
  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as CurrencyType);
    },
    [onChange],
  );

  return (
    <ListBox
      currentValue={value}
      defaultValue={t<string>('Укажите валюту')}
      items={options}
      onChange={onChangeHandler}
      readonly={readonly}
      direction={'top right'}
      label={t<string>('Укажите валюту')}
    />
  );
});
