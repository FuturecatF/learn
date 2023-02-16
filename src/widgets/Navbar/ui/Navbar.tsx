import { classNames } from 'shared/config/theme/lib/classNames';
import { Applink, AppLinkTheme } from 'shared/ui/AppLink/Applink';

import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(classes.navbar, { className })} />
);
