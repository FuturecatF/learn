import { classNames } from 'shared/config/theme/lib/classNames';
import { Applink, AppLinkTheme } from 'shared/ui/AppLink/Applink';

import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(classes.navbar, { className })}>
    <div className={classes.links}>
      <Applink to="/" className={classes.link} theme={AppLinkTheme.SECONDARY}>
        {'Главная'}
      </Applink>
      <Applink to="/about" className={classes.link} theme={AppLinkTheme.SECONDARY}>
        {'О сайте'}
      </Applink>
    </div>
  </div>
);
