import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/config/theme/lib/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/widgets';
import { getArticlesPageIsLoading } from '../../model/selectors/articlesPageSelectors';
import { ArticleInfinityList } from '../ArticleInfinityList/ArticleInfinityList';
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { ArticlePageFilters } from '../ArticlePageFilters/ArticlePageFilters';
import { articlesPageReducer } from '../../model/slice/articlesPageSlice';
import cls from './ArticlesPage.module.scss';
import { ArticlePageGreeting } from '@/features/articlePageGreeting';
import { FiltersContainer } from '../FiltersContainer/FiltersContainer';
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer';
import { ToggleFeatures } from '@/shared/lib/features';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout/StickyContentLayout';

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticlesPageIsLoading);

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlePage());
  }, [dispatch]);

  const content = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <StickyContentLayout
          left={<ViewSelectorContainer />}
          right={<FiltersContainer />}
          content={
            <Page
              data-testid="ArticlesPage"
              onScrollEnd={onLoadNextPart}
              className={classNames(cls.articlesPageRedesigned, {}, [
                className,
              ])}
            >
              <ArticleInfinityList className={cls.list} />
              <ArticlePageGreeting />
            </Page>
          }
        />
      }
      off={
        <Page
          data-testid="ArticlesPage"
          onScrollEnd={onLoadNextPart}
          className={classNames(cls.ArticlesPage, {}, [className])}
        >
          <ArticlePageFilters />
          <ArticleInfinityList className={cls.list} />
          <ArticlePageGreeting />
        </Page>
      }
    />
  );
  return (
    <DynamicModuleLoader reducers={reducers}>{content}</DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
