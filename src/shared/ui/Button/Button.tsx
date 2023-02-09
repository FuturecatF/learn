import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/config/theme/lib/classNames';

import classes from './Button.module.scss';

export const ThemeButton = {
  CLEAR: 'clear',
} as const;

type ValueOf<T> = T[keyof T];

type ButtonThemeTypes = ValueOf<typeof ThemeButton>;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonThemeTypes;
}

export const Button: FC<ButtonProps> = ({
  className, children, theme, ...props
}) => (
  <button className={classNames(classes.button, {}, [classes[theme], className])} type="button" {...props}>
    {children}
  </button>
);
