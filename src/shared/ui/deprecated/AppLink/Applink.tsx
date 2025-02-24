import { FC, memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/config/theme/lib/classNames';

import classes from './Applink.module.scss';

export const AppLinkTheme = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  RED: 'red',
} as const;

type ValueOf<T> = T[keyof T];

type AppLinkThemeTypes = ValueOf<typeof AppLinkTheme>;

interface ApplinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkThemeTypes;
  children?: ReactNode;
}

export const Applink: FC<ApplinkProps> = memo(
  ({
    className, children, to, variant = AppLinkTheme.PRIMARY, ...props
  }: ApplinkProps) => (
    <Link to={to} className={classNames(classes.applink, {}, [className, classes[variant]])} {...props}>
      {children}
    </Link>
  ),
);
