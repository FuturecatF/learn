import { memo } from 'react';
import { classNames, Mods } from 'shared/config/theme/lib/classNames';

import cls from './Text.module.scss';

export const TextVariant = {
  PRIMARY: 'primary',
  ERROR: 'error',
} as const;

export const TextAlign = {
  RIGHT: 'right',
  LEFT: 'left',
  CENTER: 'center',
} as const;

type ValueOf<T> = T[keyof T];

type TextVariants = ValueOf<typeof TextVariant>;

type TextAligns = ValueOf<typeof TextAlign>;

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: TextVariants;
  align?: TextAligns;
}
export const Text = memo(
  ({
    className, title, text, variant = TextVariant.PRIMARY, align = TextAlign.LEFT,
  }: TextProps) => (
    <div className={classNames('', {}, [cls[variant], cls[align], className])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  ),
);
