import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import { getArticlesPageInited } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { articlesPageActions } from 'pages/ArticlesPage/model/slice/articlesPageSlice';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { SortOrder } from 'shared/types';
import { ArticleSortFields, ArticleTypes } from 'entities/Article/model/types/article';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'pages/initArticlesPage',
  async (searchParams: URLSearchParams, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const inited = getArticlesPageInited(getState());

    if (inited) {
      return;
    }
    const orderFromUrl = searchParams.get('order') as SortOrder;
    const sortFromUrl = searchParams.get('sort') as ArticleSortFields;
    const searchFromUrl = searchParams.get('search');
    const typeFromUrl = searchParams.get('type') as ArticleTypes;

    if (orderFromUrl) {
      dispatch(articlesPageActions.setOrder(orderFromUrl));
    }
    if (sortFromUrl) {
      dispatch(articlesPageActions.setSort(sortFromUrl));
    }
    if (searchFromUrl) {
      dispatch(articlesPageActions.setSearch(searchFromUrl));
    }
    if (typeFromUrl) {
      dispatch(articlesPageActions.setType(typeFromUrl));
    }

    dispatch(articlesPageActions.initState());
    dispatch(fetchArticlesList({}));
  },
);
