import { StateSchema } from 'app/provider/StoreProvider';
import { ARTICLE_VIEW } from 'entities/Article';
import { SORT_ORDER } from 'shared';
import { ARTICLE_SORT_FIELD, ARTICLE_TYPES } from 'entities/Article/model/consts';

export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading;
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view || ARTICLE_VIEW.LIST;
export const getArticlesPageNumber = (state: StateSchema) => state.articlesPage?.page || 1;
export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit || 9;
export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore;
export const getArticlesPageInited = (state: StateSchema) => state.articlesPage?._inited;
export const getArticlesPageSort = (state: StateSchema) => state.articlesPage?.order || SORT_ORDER.ASC;
export const getArticlesPageOrder = (state: StateSchema) => state.articlesPage?.sort || ARTICLE_SORT_FIELD.CREATED;
export const getArticlesPageSearch = (state: StateSchema) => state.articlesPage?.search;
export const getArticlesPageType = (state: StateSchema) => state.articlesPage?.type || ARTICLE_TYPES.ALL;
