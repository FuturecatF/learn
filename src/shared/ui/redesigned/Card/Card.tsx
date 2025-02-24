import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from '@/shared/config/theme/lib/classNames';

import cls from './Card.module.scss';

export const CARD_VARIANT = {
  NORMAL: 'normal',
  OUTLINED: 'outlined',
  LIGHT: 'light'
} as const;

export type CardVariant = ValueOf<typeof CARD_VARIANT>;
export type CardPadding = '0' | '8' | '16' | '24';
export type CardBorder = 'round' | 'normal' | 'partial';

const mapPaddingToClass: Record<CardPadding, string> = {
  '0': 'gap_0',
  '8': 'gap_8',
  '16': 'gap_16',
  '24': 'gap_24',
};

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  variant?: CardVariant;
  max?: boolean;
  padding?: CardPadding;
  border?: CardBorder;
  fullHeight?: boolean;
}

export const Card = ({
  className,
  children,
  variant = CARD_VARIANT.NORMAL,
  max,
  padding = '8',
  border = 'normal',
  fullHeight,
  ...otherProps
}: CardProps) => {
  const paddingClass = mapPaddingToClass[padding];

  return (
    <div
      className={classNames(
        cls.card,
        {
          [cls.max]: max,
          [cls.fullHeight]: fullHeight,
        },
        [className, cls[variant], cls[paddingClass], cls[border]],
      )}
      {...otherProps}
    >
      {children}
    </div>
  );
};
