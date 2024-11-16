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

export const RoutePath: Record<AppRoutesPaths, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE_DETAILS]: '/articles', // +id
  [AppRoutes.ARTICLE_CREATE]: '/articles/create',
  [AppRoutes.ARTICLE_EDIT]: '/articles',
  [AppRoutes.ADMIN_PANEL]: '/dashboard',
  [AppRoutes.FORBIDDEN]: '/forbidden',
  [AppRoutes.NOT_FOUND]: '*',
};
