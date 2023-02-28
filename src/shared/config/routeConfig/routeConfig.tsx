import { RouteProps } from 'react-router-dom';
import { MainPageAsync } from 'pages/MainPage';
import { AboutPageAsync } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePageLazy } from 'pages/ProfilePage';

export const AppRoutes = {
  MAIN: 'main',
  ABOUT: 'about',
  PROFILE: 'profile',
  // last
  NOT_FOUND: 'not_found',
} as const;

type ValueOf<T> = T[keyof T];

export type AppRoutesPaths = ValueOf<typeof AppRoutes>;

export const RoutePath: Record<AppRoutesPaths, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutesPaths, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPageAsync />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPageAsync />,
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePageLazy />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
