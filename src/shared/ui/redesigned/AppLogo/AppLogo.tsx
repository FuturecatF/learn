import React, { memo } from 'react';
import cls from './AppLogo.module.scss';

import AppSvg from '@/shared/assets/icons/app-image.svg';
import { HStack } from '@/shared';
import { classNames } from '@/shared/config/theme/lib/classNames';

interface AppLogoProps {
  className?: string;
  size?: number;
}

export const AppLogo = memo(({ className, size = 50 }: AppLogoProps) => (
  <HStack
    maxWidth
    justify="center"
    className={classNames(cls.appLogoWrapper, {}, [className])}
  >
    <div className={cls.gradientBig} />
    <div className={cls.gradientSmall} />
    <AppSvg
      width={size}
      height={size}
      className={cls.appLogo}
      color={'black'}
    />
  </HStack>
));
