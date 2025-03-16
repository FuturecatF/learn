import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/config/theme/lib/classNames';

import cls from './Button.module.scss';

export const ButtonTheme = {
  CLEAR: 'clear',
  CLEAR_INVERTED: 'clearInverted',
  OUTLINE: 'outline',
  OUTLINE_RED: 'outlineRed',
  BACKGROUND: 'background',
  BACKGROUND_INVERTED: 'backgroundInverted',
  FILLED: 'filled',
} as const;

export const ButtonSize = {
  M: 'size_m',
  L: 'size_l',
  XL: 'size_xl',
} as const;
export type ButtonColor = 'normal' | 'success' | 'error';
type ValueOf<T> = T[keyof T];

type ButtonThemeTypes = ValueOf<typeof ButtonTheme>;

type ButtonSizeTypes = ValueOf<typeof ButtonSize>;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonThemeTypes;
  children: ReactNode | string;
  square?: boolean;
  size?: ButtonSizeTypes;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
  color?: ButtonColor;
  fullWidth?: boolean;
}

export const Button = memo(
  ({
    className,
    children,
    square,
    size = ButtonSize.M,
    theme = ButtonTheme.OUTLINE,
    addonLeft,
    addonRight,
    color = 'normal',
    fullWidth,
    ...props
  }: ButtonProps) => {
    const mods = {
      [cls.square]: square,
      [cls[size]]: size,
      [cls.disabled]: props.disabled,
      [cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
      [cls.fullWidth]: fullWidth,
    };

    return (
      <button
        className={classNames(cls.button, mods, [className, cls[theme], cls[color]])}
        type="button"
        disabled={props.disabled}
        {...props}
      >
        {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
        {children}
        {addonRight && <div className={cls.addonRight}>{addonRight}</div>}
      </button>
    );
  },
);
