import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared';
import { classNames } from 'shared/config/theme/lib/classNames';
import { memo } from 'react';

interface LanguageSwitcherProps {
  className?: string;
  short?: boolean;
}
export const LanguageSwitcher = memo(({ className, short }: LanguageSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button className={classNames('', {}, [className])} theme={ButtonTheme.CLEAR} onClick={toggle}>
      {short ? t('languageShort') : t('language')}
    </Button>
  );
});
