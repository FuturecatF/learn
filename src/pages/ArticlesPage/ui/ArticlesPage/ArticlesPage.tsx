import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/config/theme/lib/classNames';

import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const { t } = useTranslation('article');
  return <div className={classNames(cls.articlesPage, {}, [className])}>{'ARTICLE'}</div>;
};

export default memo(ArticlesPage);
