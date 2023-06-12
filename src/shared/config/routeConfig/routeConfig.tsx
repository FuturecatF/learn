import { RouteProps } from 'react-router-dom';
import { MainPageAsync } from 'pages/MainPage';
import { AboutPageAsync } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePageLazy } from 'pages/ProfilePage';
import { ArticlesPageAsync } from 'pages/ArticlesPage';
import { ArticleDetailsPageAsync } from 'pages/ArticleDetailPage';
import { ArticleEditPageAsync } from 'pages/ArticleEditPage';
import { AdminPanelPageAsync } from 'pages/AdminPanelPage';
import { USER_ROLES, UserRoles } from 'entities/User';
import { ForbiddenPageAsync } from 'pages/ForbiddenPage/ui/ForbiddenPage.lazy';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRoles[];
};
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

type ValueOf<T> = T[keyof T];

export type AppRoutesPaths = ValueOf<typeof AppRoutes>;

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

export const routeConfig: Record<AppRoutesPaths, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPageAsync />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPageAsync />,
  },
  [AppRoutes.PROFILE]: {
    path: `${RoutePath.profile}/:userId`,
    element: <ProfilePageLazy />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES]: {
    path: RoutePath.articles,
    element: <ArticlesPageAsync />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: `${RoutePath.article_details}/:articleId`,
    element: <ArticleDetailsPageAsync />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_CREATE]: {
    path: `${RoutePath.article_create}/create`,
    element: <ArticleEditPageAsync />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: `${RoutePath.article_edit}/:articleId/edit`,
    element: <ArticleEditPageAsync />,
    authOnly: true,
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: RoutePath.admin_panel,
    element: <AdminPanelPageAsync />,
    authOnly: true,
    roles: [USER_ROLES.ADMIN],
  },
  [AppRoutes.FORBIDDEN]: {
    path: RoutePath.forbidden,
    element: <ForbiddenPageAsync />,
  },

  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
