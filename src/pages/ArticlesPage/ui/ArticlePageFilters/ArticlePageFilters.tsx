import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/config/theme/lib/classNames';

import { ArticleTypeTabs, ArticleViewSelector, ArticleViewType } from 'entities/Article';
import { articlesPageActions } from 'pages/ArticlesPage/model/slice/articlesPageSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { Card, Input, useDebounce } from 'shared';
import { ArticleSortSelector } from 'entities/Article/ui/ArticleSortSelector/ArticleSortSelector';
import { SortOrder } from 'shared/types';
import { ArticleSortFields, ArticleTypes } from 'entities/Article/model/types/article';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import cls from './ArticlePageFilters.module.scss';

interface ArticlePageFiltersProps {
  className?: string;
}

export const ArticlePageFilters = memo(function ArticlePageFilters({ className }: ArticlePageFiltersProps) {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesPageView);
  const order = useSelector(getArticlesPageOrder);
  const sort = useSelector(getArticlesPageSort);
  const search = useSelector(getArticlesPageSearch);
  const articleType = useSelector(getArticlesPageType);

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, 500);

  const onChangeViewHandler = useCallback(
    (view: ArticleViewType) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch],
  );

  const onChangeOrderHandler = useCallback(
    (order: SortOrder) => {
      dispatch(articlesPageActions.setOrder(order));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );
  const onChangeSortHandler = useCallback(
    (sort: ArticleSortFields) => {
      dispatch(articlesPageActions.setSort(sort));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const onChangeSearchHandler = useCallback(
    (search: string) => {
      dispatch(articlesPageActions.setSearch(search));
      dispatch(articlesPageActions.setPage(1));
      debouncedFetchData();
    },
    [dispatch, debouncedFetchData],
  );

  const onChangeTypeHandler = useCallback(
    (type: ArticleTypes) => {
      dispatch(articlesPageActions.setType(type));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  return (
    <div className={classNames(cls.articlePageFilters, {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrderHandler}
          onChangeSort={onChangeSortHandler}
        />
        <ArticleViewSelector view={view} onViewChange={onChangeViewHandler} />
      </div>
      <Card className={cls.search}>
        <Input value={search} onChange={onChangeSearchHandler} placeholder={t<string>('Search')} />
      </Card>
      <ArticleTypeTabs className={cls.tabs} onChangeType={onChangeTypeHandler} value={articleType} />
    </div>
  );
});
