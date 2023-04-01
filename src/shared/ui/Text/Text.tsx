import { memo } from 'react';
import { classNames } from 'shared/config/theme/lib/classNames';

import cls from './Text.module.scss';

export const TextVariant = {
  PRIMARY: 'primary',
  INVERTED: 'inverted',
  ERROR: 'error',
} as const;

type TextVariants = ValueOf<typeof TextVariant>;

export const TextAlign = {
  RIGHT: 'right',
  LEFT: 'left',
  CENTER: 'center',
} as const;

type TextAligns = ValueOf<typeof TextAlign>;

export const TextSize = {
  M: 'size_m',
  L: 'size_l',
} as const;

type TextSizes = ValueOf<typeof TextSize>;

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: TextVariants;
  align?: TextAligns;
  size?: TextSizes;
}
export const Text = memo(
  ({
    className, title, text, variant = TextVariant.PRIMARY, align = TextAlign.LEFT, size = TextSize.M,
  }: TextProps) => (
    <div className={classNames('', {}, [cls[variant], cls[align], cls[size], className])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  ),
);
