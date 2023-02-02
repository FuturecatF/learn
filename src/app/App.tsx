import { Suspense, useContext, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { MainPageAsync } from '../../pages/MainPage/MainPage.lazy';
import { AboutPageAsync } from '../../pages/AboutPages/AboutPage.lazy';
import { ThemeContext } from '../../theme/ThemeContext';
import { useTheme } from '../../theme/useTheme';

import '../../styles/index.scss';
import { classNames } from '../../helpers/classNames/classNames';

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
