import { useTheme } from 'app/provider/ThemeProvider';
import { classNames } from 'shared/config/theme/lib/classNames';

import 'app/styles/index.scss';
import { AppRouter } from './provider/ThemeProvider/router';
import { Navbar } from 'widgets/Navbar';

export const App = () => {
	const { theme } = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar />
			<AppRouter />
		</div>
	);
};
