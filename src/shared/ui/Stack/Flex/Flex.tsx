import { classNames, Mods } from 'shared/config/theme/lib/classNames';

import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';
import cls from './Flex.module.scss';

type FlexJustify = 'start' | 'center' | 'end' | 'between';
type FlexAlign = 'start' | 'center' | 'end';
type FlexDirection = 'row' | 'column';
type FlexGap = '4' | '8' | '16' | '32';

const justifyClasses: Record<FlexJustify, string> = {
  start: cls.justifyStart,
  center: cls.justifyCenter,
  end: cls.justifyEnd,
  between: cls.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
  start: cls.alignStart,
  center: cls.alignCenter,
  end: cls.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
  row: cls.directionRow,
  column: cls.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
  4: cls.gap4,
  8: cls.gap8,
  16: cls.gap16,
  32: cls.gap32,
};

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface FlexProps extends DivProps {
  className?: string;
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  gap?: FlexGap;
  maxWidth?: boolean;
}
export const Flex = ({
  className,
  children,
  justify = 'start',
  align = 'center',
  direction = 'row',
  gap,
  maxWidth,
  ...otherProps
}: FlexProps) => {
  const classes = [
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
    className,
  ];

  const mods: Mods = {
    [cls.maxWidth]: maxWidth,
  };
  return (
    <div className={classNames(cls.flex, mods, classes)} {...otherProps}>
      {children}
    </div>
  );
};
