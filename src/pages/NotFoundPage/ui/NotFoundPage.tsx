import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/config/theme/lib/classNames';

import { Page } from '@/widgets';
import classes from './NotFoundPage.module.scss';
import { TestProps } from '@/shared/types/tests';

interface NotFoundPageProps extends TestProps {
  className?: string;
}

export const NotFoundPage = ({ ...props }: NotFoundPageProps) => {
  const { t } = useTranslation('notFoundPage');

  return (
    <Page className={classNames(classes.notFoundPage)} data-testid={'NotFoundPage'}>
      {t('notFoundPage.title')}
    </Page>
  );
};
