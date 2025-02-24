import { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/config/theme/lib/classNames';

import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar = ({ className, src, size, alt }: AvatarProps) => {
  const styles = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size],
  );
  return (
    <img
      src={src}
      className={classNames(cls.avatar, {}, [className])}
      alt={alt}
      style={styles}
    />
  );
};
