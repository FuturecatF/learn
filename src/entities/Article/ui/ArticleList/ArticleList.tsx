import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/config/theme/lib/classNames';

import { Article, ARTICLE_VIEW } from 'entities/Article';
import { ArticleViewType } from 'entities/Article/model/types/article';
import { ArticleListItem } from 'entities/Article/ui/ArticleListItem/ArticleListItem';
import { Text, TextSize } from 'shared';
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
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleList = memo(function ArticleList({
  className,
  articles,
  view = ARTICLE_VIEW.LIST,
  isLoading,
  target,
}: ArticleListProps) {
  const { t } = useTranslation();

  const renderArticle = (article: Article) => (
    <ArticleListItem key={article.id} article={article} view={view} target={target} />
  );

  if (!isLoading && !articles.length) {
    return <Text className={cls.notFoundArticles} title={t<string>('articlesNotFound')} size={TextSize.L} />;
  }

  return (
    <div className={classNames(cls.articleList, {}, [className, cls[view?.toLowerCase()]])}>
      {articles.length > 0 && articles.map(renderArticle)}
      {isLoading && getSkeletons(view)}
    </div>
  );
});
