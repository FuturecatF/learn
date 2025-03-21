import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/config/theme/lib/classNames';

import { Page } from '@/widgets';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = memo(function ArticleEditPage({ className }: ArticleEditPageProps) {
  const { t } = useTranslation();
  const { articleId } = useParams();
  const isEdit = Boolean(articleId);

  return (
    <Page className={classNames(cls.articleEditPage, {}, [className])}>
      {isEdit ? 'Edit article' : 'Create new article'}
    </Page>
  );
});

export default ArticleEditPage;
