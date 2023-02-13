import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { classNames } from 'shared/config/theme/lib/classNames';

import classes from './Button.module.scss';

export const ThemeButton = {
  CLEAR: 'clear',
  OUTLINE: 'outline',
} as const;

type ValueOf<T> = T[keyof T];

type ButtonThemeTypes = ValueOf<typeof ThemeButton>;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonThemeTypes;
  children: ReactNode | string;
}

export const Button = ({
  className, children, theme, ...props
}: ButtonProps) => (
  <button className={classNames(classes.button, {}, [classes[theme], className])} type="button" {...props}>
    {children}
  </button>
);
