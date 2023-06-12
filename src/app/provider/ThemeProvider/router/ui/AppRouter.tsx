import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRouteProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets';
import { ProtectedRouter } from 'app/provider/ThemeProvider/router/ui/ProtectedRouter';

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
