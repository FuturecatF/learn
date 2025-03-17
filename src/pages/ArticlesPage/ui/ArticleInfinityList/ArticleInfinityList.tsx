import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useInitialEffect, Text } from '@/shared';
import { ArticleList } from '@/entities/Article';
import { getArticles } from '../../model/slice/articlesPageSlice';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';

interface ArticleInfinityListProps {
  className?: string;
}

export const ArticleInfinityList = memo(function ArticleInfinityList({
  className,
}: ArticleInfinityListProps) {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const error = useSelector(getArticlesPageError);
  const [searchParams] = useSearchParams();

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  if (error) {
    return <Text text={error} />;
  }

  return (
    <ArticleList
      className={className}
      articles={articles}
      isLoading={isLoading}
      view={view}
    />
  );
});
