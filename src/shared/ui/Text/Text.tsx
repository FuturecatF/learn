import { classNames } from 'shared/config/theme/lib/classNames';

import cls from './Text.module.scss';

export const TextVariant = {
  PRIMARY: 'primary',
  ERROR: 'error',
} as const;

type ValueOf<T> = T[keyof T];

type TextVariants = ValueOf<typeof TextVariant>;

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: TextVariants;
}
export const Text = ({
  className, title, text, variant = TextVariant.PRIMARY,
}: TextProps) => (
  <div className={classNames('', {}, [cls[variant], className])}>
    {title && <p className={cls.title}>{title}</p>}
    {text && <p className={cls.text}>{text}</p>}
  </div>
);
