import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../../../router/config/routeConfig';
import { ProtectedRouter } from './ProtectedRouter';

import { AppRouteProps } from '@/shared/types/router';
import { PageLoader } from '@/widgets';

export const AppRouter = memo(() => {
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>;

    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <ProtectedRouter roles={route.roles}>{element}</ProtectedRouter> : element}
      />
    );
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
});
