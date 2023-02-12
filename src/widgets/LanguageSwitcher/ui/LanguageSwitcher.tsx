import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared';
import { classNames } from 'shared/config/theme/lib/classNames';

interface LanguageSwitcherProps {
  className?: string;
}
export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button className={classNames('', {}, [className])} theme={ThemeButton.CLEAR} onClick={toggle}>
      {t('language')}
    </Button>
  );
};
