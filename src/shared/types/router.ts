import { RouteProps } from 'react-router-dom';
import { UserRoles } from '@/entities/User';
import { AppRoutes } from '@/shared/const/router';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRoles[];
  // nested?: Record<AppRoutesPaths, AppRouteProps>[];
};
export type AppRoutesPaths = ValueOf<typeof AppRoutes>;
