import { matchPath, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AppRouteByPathPattern, AppRoutes, } from '@/shared/const/router';
import { AppRoutesPaths } from '@/shared/types/router';

export function useRouteChange() {
  const location = useLocation();
  const [appRoute, setAppRoute] = useState<AppRoutesPaths>(AppRoutes.MAIN);

  useEffect(() => {
    Object.entries(AppRouteByPathPattern).forEach(([pattern, route]) => {
      if (matchPath(pattern, location.pathname)) {
        setAppRoute(route);
      }
    });
  }, [location.pathname]);

  return appRoute;
}
