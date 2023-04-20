import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from 'app/provider/ThemeProvider';
import { classNames } from 'shared/config/theme/lib/classNames';
import { Navbar, Sidebar } from 'widgets';
import { getUserInited, userActions } from 'entities/User';
import { AppRouter } from './provider/ThemeProvider/router';

export const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {inited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};
