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
  S: 'size_s',
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
  'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSizes, HeaderTagType> = {
  [TextSize.S]: 'h3',
  [TextSize.M]: 'h2',
  [TextSize.L]: 'h1',
};

export const Text = memo(
  ({
    className,
    title,
    text,
    variant = TextVariant.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
    'data-testid': dataTestId = 'Text',
  }: TextProps) => {
    const HeaderTag = mapSizeToHeaderTag[size];

    return (
      <div className={classNames('', {}, [cls[variant], cls[align], cls[size], className])}>
        {title && (
          <HeaderTag data-testid={`${dataTestId}.Header`} className={cls.title}>
            {title}
          </HeaderTag>
        )}
        {text && (
          <p data-testid={`${dataTestId}.Paragraph`} className={cls.text}>
            {text}
          </p>
        )}
      </div>
    );
  },
);
