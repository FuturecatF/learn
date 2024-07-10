import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from '@/shared';
import { classNames } from '@/shared/config/theme/lib/classNames';
import { ARTICLE_VIEW } from '../../model/consts';
import { Article, ArticleViewType } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
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

  // const isList = view === ARTICLE_VIEW.LIST;
  // const itemsPerRow = isList ? 1 : 3;
  // const rowCount = isList ? articles.length : articles.length / itemsPerRow;
  //
  // const rowRenderer = ({ index, key, style }: ListRowProps) => {
  //   const items = [];
  //   const fromIndex = index * itemsPerRow;
  //   const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);
  //
  //   for (let i = fromIndex; i < toIndex; i += 1) {
  //     items.push(
  //       <ArticleListItem key={articles[i].id} article={articles[i]} view={view} target={target} className={cls.card} />,
  //     );
  //   }
  //   return (
  //     <div key={key} style={style} className={classNames('', { [cls.cardTile]: !isList })}>
  //       {items}
  //     </div>
  //   );
  // };

  return (
    // <WindowScroller scrollElement={document.getElementById(PAGE_ID) as Element}>
    //   {({
    //     width, height, registerChild, onChildScroll, isScrolling, scrollTop,
    //   }) => (
    //     <div className={classNames(cls.articleList, {}, [className, cls[view?.toLowerCase()]])} ref={registerChild}>
    //       <List
    //         rowCount={rowCount}
    //         height={height ?? 700}
    //         rowHeight={isList ? 700 : 330}
    //         rowRenderer={rowRenderer}
    //         width={width ? width - 80 : 700}
    //         onScroll={onChildScroll}
    //         isScrolling={isScrolling}
    //         scrollTop={scrollTop}
    //         autoHeight
    //       />
    //       {isLoading && getSkeletons(view)}
    //     </div>
    //   )}
    // </WindowScroller>
    <div className={classNames(cls.articleList, {}, [className, cls[view?.toLowerCase()]])}>
      {articles.length > 0 && articles.map(renderArticle)}
      {isLoading && getSkeletons(view)}
    </div>
  );
});
