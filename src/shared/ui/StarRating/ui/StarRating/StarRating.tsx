import React, { memo, useState } from 'react';
import StarIcon from '@/shared/assets/icons/star.svg';
import { Icon } from '@/shared/ui/Icon/Icon';
import { classNames } from '@/shared/config/theme/lib/classNames';
import cls from './StarRating.module.scss';

interface StarRatingProps {
  onSelect?: (starsCount: number) => void;
  size?: number;
  selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];
export const StarRating = memo(function StarRating({ onSelect, size = 30, selectedStars = 0 }: StarRatingProps) {
  const [isHovered, setHovered] = useState(false);
  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));
  console.log('currentStarsCount', currentStarsCount);
  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount);
      setCurrentStarsCount(starsCount);
      setIsSelected(true);
    }
  };

  return (
    <div className={cls.starRating}>
      {stars.map((starNumber) => (
        <Icon
          className={classNames(
            cls.startIcon,
            {
              [cls.hovered]: currentStarsCount >= starNumber,
              [cls.selected]: isSelected,
            },
            [],
          )}
          Svg={StarIcon}
          key={starNumber}
          width={size}
          height={size}
          onMouseLeave={onLeave}
          onMouseEnter={onHover(starNumber)}
          onClick={onClick(starNumber)}
        />
      ))}
    </div>
  );
});
