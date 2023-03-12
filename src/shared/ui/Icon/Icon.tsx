import React, { memo } from 'react';
import { classNames } from 'shared/config/theme/lib/classNames';

import cls from './Icon.module.scss';

interface IconProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo(function Icon({ className, Svg }: IconProps) {
  return <Svg className={classNames(cls.icon, {}, [className])} />;
});
