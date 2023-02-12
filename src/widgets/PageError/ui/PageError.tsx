import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/config/theme/lib/classNames';
import { Button } from 'shared';

import classes from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}
export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation('translation');

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(classes.pageError, {}, [className])}>
      <p>{t('pageError.title')}</p>
      <Button onClick={reloadPage}>{t('pageError.reloadButton')}</Button>
    </div>
  );
};
