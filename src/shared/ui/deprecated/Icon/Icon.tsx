import React, { memo } from 'react';
import { classNames } from '@/shared/config/theme/lib/classNames';

import cls from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  inverted?: boolean;
}
/**
 * @deprecated
 */
export const Icon = memo(function Icon({
  className, Svg, inverted, ...otherProps
}: IconProps) {
  return <Svg className={classNames(inverted ? cls.inverted : cls.icon, {}, [className])} {...otherProps} />;
});
