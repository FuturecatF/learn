import { AppRoutesPaths } from '@/shared/types/router';

export const AppRoutes = {
  MAIN: 'main',
  ABOUT: 'about',
  PROFILE: 'profile', // + :id
  ARTICLES: 'articles',
  ARTICLE_DETAILS: 'article_details',
  ARTICLE_CREATE: 'article_create',
  ARTICLE_EDIT: 'article_edit',
  ADMIN_PANEL: 'admin_panel',
  FORBIDDEN: 'forbidden',
  // last
  NOT_FOUND: 'not_found',
} as const;

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticlesId = (id: string) => `/articles/${id}`;
export const getRouteArticlesCreate = () => '/articles/create';
export const getRouteArticlesEdit = (id: string) => `/articles/edit/${id}`;
export const getRouteDashboard = () => '/dashboard';
export const getRouteForbidden = () => '/forbidden';

export const RoutePath: Record<AppRoutesPaths, string> = {
  [AppRoutes.MAIN]: getRouteMain(),
  [AppRoutes.ABOUT]: getRouteAbout(),
  [AppRoutes.PROFILE]: getRouteProfile(':userId'),
  [AppRoutes.ARTICLES]: getRouteArticles(),
  [AppRoutes.ARTICLE_DETAILS]: getRouteArticlesId(':articleId'), // +id
  [AppRoutes.ARTICLE_CREATE]: getRouteArticlesCreate(),
  [AppRoutes.ARTICLE_EDIT]: getRouteArticlesEdit(':articleId'),
  [AppRoutes.ADMIN_PANEL]: getRouteDashboard(),
  [AppRoutes.FORBIDDEN]: getRouteForbidden(),
  [AppRoutes.NOT_FOUND]: '*',
};
