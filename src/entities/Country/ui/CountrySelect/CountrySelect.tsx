import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/config/theme/lib/classNames';
import { Select } from 'shared';
import { memo, useCallback } from 'react';
import { COUNTRY, CountryType } from 'entities/Country';

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
    <Select
      value={value}
      onChange={onChangeHandler}
      className={classNames('', {}, [className])}
      label={t<string>('Укажите страну')}
      options={options}
      readonly={readonly}
    />
  );
});
