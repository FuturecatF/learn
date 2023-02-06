import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AboutPageAsync } from 'pages/AboutPage';
import { MainPageAsync } from 'pages/MainPage';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

export const AppRouter = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				{Object.values(routeConfig).map(({ element, path }) => (
					<Route key={path} path={path} element={element} />
				))}
			</Routes>
		</Suspense>
	);
};
