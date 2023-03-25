import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/config/theme/lib/classNames';

import { Article, ARTICLE_VIEW } from 'entities/Article';
import { ArticleViewType } from 'entities/Article/model/types/article';
import { ArticleListItem } from 'entities/Article/ui/ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

const getSkeletons = (view: ArticleViewType) =>
  new Array(view === ARTICLE_VIEW.TILE ? 9 : 3)
    .fill(0)
    .map((item, index) => <ArticleListItemSkeleton key={index} view={view} />);

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleViewType;
}

export const ArticleList = memo(function ArticleList({
  className,
  articles,
  view = ARTICLE_VIEW.LIST,
  isLoading,
}: ArticleListProps) {
  const { t } = useTranslation();

  const renderArticle = (article: Article) => <ArticleListItem key={article.id} article={article} view={view} />;

  // if (isLoading) {
  //   return (
  //     <div className={classNames(cls.articleList, {}, [className, cls[view?.toLowerCase()]])}>{getSkeletons(view)}</div>
  //   );
  // }

  return (
    <div className={classNames(cls.articleList, {}, [className, cls[view?.toLowerCase()]])}>
      {articles.length > 0 && articles.map(renderArticle)}
      {isLoading && getSkeletons(view)}
    </div>
  );
});
