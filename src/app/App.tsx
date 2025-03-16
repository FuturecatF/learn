import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@/app/provider/ThemeProvider';
import { classNames } from '@/shared/config/theme/lib/classNames';
import { Navbar, Sidebar } from '@/widgets';
import { getUserInited, initAuthData } from '@/entities/User';
import { AppRouter } from './provider/ThemeProvider/router';
import { useAppDispatch } from '@/shared';
import { ToggleFeatures } from '@/shared/lib/features';
import { MainLayout } from '@/shared/layouts/MainLayout';

export const App = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(initAuthData());
  }, [dispatch]);

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={
        <div className={classNames('app_redesigned', {}, [theme])} id={'app'}>
          <Suspense fallback="">
            <MainLayout
              content={inited ? <AppRouter /> : <></>}
              header={<Navbar />}
              sidebar={<Sidebar />}
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
