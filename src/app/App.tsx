import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@/app/provider/ThemeProvider';
import { classNames } from '@/shared/config/theme/lib/classNames';
import { Navbar, PageLoader, Sidebar } from '@/widgets';
import { getUserInited, initAuthData } from '@/entities/User';
import { AppRouter } from './provider/ThemeProvider/router';
import { useAppDispatch } from '@/shared';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout/AppLoaderLayout';
import { useAppToolbar } from '@/app/lib/useAppToolbar';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { withTheme } from './provider/ThemeProvider/ui/withTheme';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);
  const toolbar = useAppToolbar();
  useEffect(() => {
    dispatch(initAuthData());
  }, [dispatch]);

  if (!inited) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <div id="app" className={classNames('app_redesigned', {}, [theme])}>
            <AppLoaderLayout />{' '}
          </div>
        }
        off={<PageLoader />}
      />
    );
  }

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={
        <div className={classNames('app_redesigned', {}, [theme])} id={'app'}>
          <Suspense fallback="">
            <MainLayout
              header={<Navbar />}
              content={<AppRouter />}
              sidebar={<Sidebar />}
              toolbar={toolbar}
            />
          </Suspense>
        </div>
      }
      off={
        <div className={classNames('app', {}, [theme])} id={'app'}>
          <Suspense fallback="">
            <Navbar />
            <div className="content-page">
              <Sidebar />
              {inited && <AppRouter />}
            </div>
          </Suspense>
        </div>
      }
    />
  );
};

export default withTheme(App)
