import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { HStack, Text, TextSize } from '@/shared';
import { classNames } from '@/shared/config/theme/lib/classNames';
import { ARTICLE_VIEW } from '../../model/consts';
import { Article, ArticleViewType } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';

const getSkeletons = (view: ArticleViewType) =>
  new Array(view === ARTICLE_VIEW.SMALL ? 9 : 3)
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
  view = ARTICLE_VIEW.SMALL,
  isLoading,
  target,
}: ArticleListProps) {
  const { t } = useTranslation();

  const renderArticle = (article: Article) => (
    <ArticleListItem key={article.id} article={article} view={view}
      target={target} data-testid={'ArticleListItem'} />
  );

  if (!isLoading && !articles.length) {
    return <Text className={cls.notFoundArticles} title={t<string>('articlesNotFound')} size={TextSize.L} />;
  }


  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <HStack
          wrap="wrap"
          gap="16"
          className={classNames(cls.articleListRedesigned, {}, [])}
          data-testid="ArticleList"
        >
          {articles.map((item) => (
            <ArticleListItem
              article={item}
              view={view}
              target={target}
              key={item.id}
              className={cls.card}
            />
          ))}
          {isLoading && getSkeletons(view)}
        </HStack>
      }
      off={
        <div className={classNames(cls.articleList, {}, [className, cls[view?.toLowerCase()]])}
          data-testid={'ArticleList'}>
          {articles.length > 0 && articles.map(renderArticle)}
          {isLoading && getSkeletons(view)}
        </div>
      }
    />

  );
});
