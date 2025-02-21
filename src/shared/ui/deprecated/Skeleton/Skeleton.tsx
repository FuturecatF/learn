import { CSSProperties, memo } from 'react';

import { classNames } from '@/shared/config/theme/lib/classNames';

import cls from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  borderRadius?: string;
}

/**
 * @deprecated
 */
export const Skeleton = memo(function Skeleton({
  className, height, width, borderRadius,
}: SkeletonProps) {
  const styles: CSSProperties = {
    height,
    width,
    borderRadius,
  };
  return <div className={classNames(cls.skeleton, {}, [className])} style={styles} />;
});
