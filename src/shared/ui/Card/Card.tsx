import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from '@/shared/config/theme/lib/classNames';

import cls from './Card.module.scss';

export const CARD_VARIANT = {
  NORMAL: 'normal',
  OUTLINED: 'outlined',
} as const;

export type CardVariant = ValueOf<typeof CARD_VARIANT>;

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  variant?: CardVariant;
  max?: boolean;
}

export const Card = ({
  className, children, variant = CARD_VARIANT.NORMAL, max, ...otherProps
}: CardProps) => (
  <div className={classNames(cls.card, { [cls.max]: max }, [className, cls[variant]])} {...otherProps}>
    {children}
  </div>
);
