import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { MainPageAsync } from 'pages/MainPage';
import { AboutPageAsync } from 'pages/AboutPage';
import { useTheme } from 'app/provider/ThemeProvider';
import { classNames } from 'shared/config/theme/lib/classNames';

import 'app/styles/index.scss';

export const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>Переключить тему</button>
			<Link to={'/'}>Главная</Link>
			<Link to={'/about'}>О сайте</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={'/'} element={<MainPageAsync />} />
					<Route path={'/about'} element={<AboutPageAsync />} />
				</Routes>
			</Suspense>
		</div>
	);
};
