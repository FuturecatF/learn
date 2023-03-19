import { RouteProps } from 'react-router-dom';
import { MainPageAsync } from 'pages/MainPage';
import { AboutPageAsync } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePageLazy } from 'pages/ProfilePage';
import { ArticlesPageAsync } from 'pages/ArticlesPage';
import { ArticleDetailsPageAsync } from 'pages/ArticleDetailPage';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
};
export const AppRoutes = {
  MAIN: 'main',
  ABOUT: 'about',
  PROFILE: 'profile', // + :id
  ARTICLES: 'articles',
  ARTICLE_DETAILS: 'article_details',
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
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
