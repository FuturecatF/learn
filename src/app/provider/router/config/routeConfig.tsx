import { MainPageAsync } from '@/pages/MainPage';
import { AboutPageAsync } from '@/pages/AboutPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePageLazy } from '@/pages/ProfilePage';
import { ArticlesPageAsync } from '@/pages/ArticlesPage';
import { ArticleDetailsPageAsync } from '@/pages/ArticleDetailPage';
import { ArticleEditPageAsync } from '@/pages/ArticleEditPage';
import { AdminPanelPageAsync } from '@/pages/AdminPanelPage';
import { USER_ROLES } from '@/entities/User';
import { ForbiddenPageAsync } from '@/pages/ForbiddenPage';
import {
  AppRoutes, getRouteAbout, getRouteArticles, getRouteArticlesCreate,
  getRouteArticlesEdit, getRouteArticlesId,
  getRouteDashboard,
  getRouteForbidden, getRouteMain, getRouteProfile,
} from '@/shared/const/router';
import { AppRouteProps, AppRoutesPaths } from '@/shared/types/router';

export const routeConfig: Record<AppRoutesPaths, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPageAsync />,
  },
  [AppRoutes.ABOUT]: {
    path: getRouteAbout(),
    element: <AboutPageAsync />,
  },
  [AppRoutes.PROFILE]: {
    path: getRouteProfile(':userId'),
    element: <ProfilePageLazy />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES]: {
    path: getRouteArticles(),
    element: <ArticlesPageAsync />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: getRouteArticlesId(':articleId'),
    element: <ArticleDetailsPageAsync />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_CREATE]: {
    path: getRouteArticlesCreate(),
    element: <ArticleEditPageAsync />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: getRouteArticlesEdit(':articleId'),
    element: <ArticleEditPageAsync />,
    authOnly: true,
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: getRouteDashboard(),
    element: <AdminPanelPageAsync />,
    authOnly: true,
    roles: [USER_ROLES.ADMIN],
  },
  [AppRoutes.FORBIDDEN]: {
    path: getRouteForbidden(),
    element: <ForbiddenPageAsync />,
  },

  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
};
