import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/config/theme/lib/classNames';

import classes from './Applink.module.scss';

const AppLinkTheme = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
} as const;

type ValueOf<T> = T[keyof T];

type AppLinkThemeTypes = ValueOf<typeof AppLinkTheme>;

interface ApplinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkThemeTypes;
}

export const Applink: FC<ApplinkProps> = ({
  className, children, to, theme = AppLinkTheme.PRIMARY, ...props
}) => (
  <Link to={to} className={classNames(classes.applink, {}, [className, classes[theme]])} {...props}>
    {children}
  </Link>
);
