import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from '@/shared';
import { CURRENCY, CurrencyType } from '../../model/types/currency';
import { ToggleFeatures } from '@/shared/lib/features';

interface CurrencySelectProps {
  className?: string;
  value?: CurrencyType;
  onChange?: (value: CurrencyType) => void;
  readonly?: boolean;
}

const options = [
  {
    value: CURRENCY.RUB,
    content: CURRENCY.RUB,
  },
  {
    value: CURRENCY.USD,
    content: CURRENCY.USD,
  },
  {
    value: CURRENCY.EUR,
    content: CURRENCY.EUR,
  },
];

export const CurrencySelect = memo(
  ({ className, value, onChange, readonly }: CurrencySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as CurrencyType);
      },
      [onChange],
    );

    const props = {
      className,
      value,
      defaultValue: t('Укажите валюту'),
      label: t('Укажите валюту'),
      items: options,
      onChange: onChangeHandler,
      readonly,
      direction: 'top right' as const,
    };

    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<ListBox {...props} />}
        off={<ListBox {...props} />}
      />
    );
  },
);
