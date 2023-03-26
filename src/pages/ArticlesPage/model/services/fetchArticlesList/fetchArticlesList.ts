import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider';
import { Article } from 'entities/Article';
import {
  getArticlesPageLimit,
  getArticlesPageNumber,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { addQueryParams } from 'shared';
import { ARTICLE_TYPES } from 'entities/Article/model/types/article';

interface FetchArticlesListProps {
  replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
  'pages/fetchArticlesList',
  async (props, thunkAPI) => {
    const { replace } = props;
    const { extra, rejectWithValue, getState } = thunkAPI;

    const page = getArticlesPageNumber(getState());
    const limit = getArticlesPageLimit(getState());
    const order = getArticlesPageOrder(getState());
    const sort = getArticlesPageSort(getState());
    const search = getArticlesPageSearch(getState());
    const type = getArticlesPageType(getState());
    try {
      addQueryParams({
        sort,
        order,
        search,
        type,
      });
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
          _order: order,
          _sort: sort,
          q: search,
          type: type === ARTICLE_TYPES.ALL ? undefined : type,
        },
      });

      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
