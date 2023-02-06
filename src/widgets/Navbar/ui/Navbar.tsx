import { Link } from 'react-router-dom';
import { classNames } from 'shared/config/theme/lib/classNames';
import { Applink } from 'shared/ui/AppLink/Applink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

import classes from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	return (
		<div className={classNames(classes.navbar, { className })}>
			<ThemeSwitcher />
			<div className={classes.links}>
				<Applink to={'/'} className={classes.link} theme='secondary'>
					Главная
				</Applink>
				<Applink to={'/about'} className={classes.link} theme='secondary'>
					О сайте
				</Applink>
			</div>
		</div>
	);
};
