import React, { memo, useState } from 'react';
import StarIcon from '@/shared/assets/icons/star.svg';
import { classNames } from '@/shared/config/theme/lib/classNames';
import cls from './StarRating.module.scss';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import { Icon as IconDeprecated } from '../../../Icon';
import { Icon } from '../../../../redesigned/Icon';

interface StarRatingProps {
  onSelect?: (starsCount: number) => void;
  size?: number;
  selectedStars?: number;
  className?: string;
}


const stars = [1, 2, 3, 4, 5];
/**
 * @deprecated
 */
export const StarRating = memo(function StarRating({
  onSelect,
  size = 30,
  selectedStars = 0,
  className,
}: StarRatingProps) {
  const [isHovered, setHovered] = useState(false);
  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

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
    <div
      className={classNames(
        toggleFeatures({
          name: 'isAppRedesigned',
          off: () => cls.starRating,
          on: () => cls.sarRatingRedesigned,
        }),
        {},
        [className],
      )}
    >
      {stars.map((starNumber) => {
        const commonProps = {
          className: classNames(cls.starIcon, { [cls.selected]: isSelected }, [
            currentStarsCount >= starNumber ? cls.hovered : cls.normal,
          ]),
          Svg: StarIcon,
          key: starNumber,
          width: size,
          height: size,
          onMouseLeave: onLeave,
          onMouseEnter: onHover(starNumber),
          onClick: onClick(starNumber),
          'data-testid': `StarRating.${starNumber}`,
          'data-selected': currentStarsCount >= starNumber,
        };
        return (
          <ToggleFeatures
            feature="isAppRedesigned"
            on={<Icon clickable={!isSelected} {...commonProps} />}
            off={<IconDeprecated {...commonProps} />}
          />
        );
      })}
    </div>
  );
});
