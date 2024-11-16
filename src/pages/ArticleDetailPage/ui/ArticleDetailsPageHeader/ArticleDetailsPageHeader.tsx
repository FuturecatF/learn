import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/config/theme/lib/classNames';
import { Button, HStack } from '@/shared';
import { getArticleDetailsData } from '@/entities/Article';
import { getCanEditArticle } from '../../model/selectors/article';
import cls from './ArticleDetailsPageHeader.module.scss';
import { getRouteArticles, getRouteArticlesEdit } from '@/shared/const/router';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo(function ArticleDetailsPageHeader({
  className,
}: ArticleDetailsPageHeaderProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const canEditArticle = useSelector(getCanEditArticle);
  const article = useSelector(getArticleDetailsData);

  const onBackToList = useCallback(() => {
    navigate(getRouteArticles());
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    navigate(getRouteArticlesEdit(article?.id ?? ''));
  }, [navigate, article]);

  return (
    <HStack justify={'between'} className={classNames('', {}, [className])} maxWidth>
      <Button onClick={onBackToList}>{t('backward')}</Button>
      {canEditArticle && (
        <Button className={cls.buttonEdit} onClick={onEditArticle}>
          {t('Редактировать')}
        </Button>
      )}
    </HStack>
  );
});
