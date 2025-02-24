import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Button, ButtonTheme } from '@/shared';
import { classNames } from '@/shared/config/theme/lib/classNames';
import { ToggleFeatures } from '@/shared/lib/features';

interface LanguageSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LanguageSwitcher = memo(
  ({ className, short }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
      await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
          >
            {short ? t('languageShort') : t('language')}
          </Button>
        }
        off={
          <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
          >
            {short ? t('languageShort') : t('language')}
          </Button>
        }
      />
    );
  },
);
