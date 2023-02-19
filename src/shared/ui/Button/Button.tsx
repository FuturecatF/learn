import { ButtonHTMLAttributes, ReactNode } from 'react';
import { classNames } from 'shared/config/theme/lib/classNames';

import cls from './Button.module.scss';

export const ButtonTheme = {
  CLEAR: 'clear',
  CLEAR_INVERTED: 'clearInverted',
  OUTLINE: 'outline',
  BACKGROUND: 'background',
  BACKGROUND_INVERTED: 'backgroundInverted',
} as const;

export const ButtonSize = {
  M: 'size_m',
  L: 'size_l',
  XL: 'size_xl',
} as const;

type ValueOf<T> = T[keyof T];

type ButtonThemeTypes = ValueOf<typeof ButtonTheme>;

type ButtonSizeTypes = ValueOf<typeof ButtonSize>;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonThemeTypes;
  children: ReactNode | string;
  square?: boolean;
  size?: ButtonSizeTypes;
}

export const Button = ({
  className, children, square, size = ButtonSize.M, theme, ...props
}: ButtonProps) => {
  const mods = {
    [cls.square]: square,
    [cls[size]]: size,
  };
  return (
    <button className={classNames(cls.button, mods, [cls[theme], className])} type="button" {...props}>
      {children}
    </button>
  );
};
