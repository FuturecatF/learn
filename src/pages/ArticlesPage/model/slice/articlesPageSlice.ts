import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/provider/StoreProvider';
import { ARTICLE_VIEW_LOCALSTORAGE_AUTH_KEY } from '@/shared/const/localStorage';
import { SORT_ORDER } from '@/shared';
import { SortOrder } from '@/shared/types/sort';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { articlesPageSchema } from '../types/articlesPageSchema';
import {
  Article, ARTICLE_VIEW, ArticleViewType,
  ArticleSortFields,
  ArticleTypes,
  ARTICLE_SORT_FIELD, ARTICLE_TYPES,
} from '@/entities/Article';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

const articlesPageSlice = createSlice({
  name: 'pages/articlesPageSlice',
  initialState: articlesAdapter.getInitialState<articlesPageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: ARTICLE_VIEW.BIG,
    page: 1,
    hasMore: true,
    _inited: false,
    limit: 9,
    sort: ARTICLE_SORT_FIELD.CREATED,
    search: '',
    order: SORT_ORDER.ASC,
    type: ARTICLE_TYPES.ALL,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleViewType>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_AUTH_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticleSortFields>) => {
      state.sort = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setType: (state, action: PayloadAction<ArticleTypes>) => {
      state.type = action.payload;
    },

    initState: (state) => {
      const view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_AUTH_KEY) as ArticleViewType;
      state.view = view;
      state.limit = view === ARTICLE_VIEW.BIG ? 4 : 9;
      state._inited = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;

        if (action.meta.arg.replace) {
          articlesAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticlesList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasMore = action.payload.length >= state.limit;

        if (action.meta.arg.replace) {
          articlesAdapter.setAll(state, action.payload);
        } else {
          articlesAdapter.addMany(state, action.payload);
        }
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  actions: articlesPageActions,
  reducer: articlesPageReducer,
} = articlesPageSlice;
