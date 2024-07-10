import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/config/theme/lib/classNames';
import { ListBox, Select } from '@/shared';
import { memo, useCallback } from 'react';
import { COUNTRY, CountryType } from '../../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: CountryType;
  onChange?: (value: CountryType) => void;
  readonly?: boolean;
}

const options = [
  { value: COUNTRY.Russia, content: COUNTRY.Russia },
  { value: COUNTRY.Belarus, content: COUNTRY.Belarus },
];

export const CountrySelect = memo(({
  className, value, onChange, readonly,
}: CountrySelectProps) => {
  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as CountryType);
    },
    [onChange],
  );
  return (
    <ListBox
      currentValue={value}
      defaultValue={t<string>('Укажите страну')}
      items={options}
      onChange={onChangeHandler}
      readonly={readonly}
      direction={'top right'}
      label={t<string>('Укажите страну')}
    />
  );
});
