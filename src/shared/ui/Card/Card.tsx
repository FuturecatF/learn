import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from 'shared/config/theme/lib/classNames';

import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export const Card = ({ className, children, ...otherProps }: CardProps) => (
  <div className={classNames(cls.card, {}, [className])} {...otherProps}>
    {children}
  </div>
);
