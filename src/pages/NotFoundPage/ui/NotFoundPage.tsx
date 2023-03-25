import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/config/theme/lib/classNames';

import { Page } from 'shared';
import classes from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
  const { t } = useTranslation('notFoundPage');

  return <Page className={classNames(classes.notFoundPage)}>{t('notFoundPage.title')}</Page>;
};
