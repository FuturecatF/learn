import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/config/theme/lib/classNames';

import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page/Page';
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
