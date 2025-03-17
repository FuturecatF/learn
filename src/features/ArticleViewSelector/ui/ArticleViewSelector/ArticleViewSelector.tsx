import { memo } from 'react';
import { classNames } from '@/shared/config/theme/lib/classNames';

import { Button, ButtonTheme, HStack, Icon } from '@/shared';
import { ARTICLE_VIEW, ArticleViewType } from '@/entities/Article';
import cls from './ArticleViewSelector.module.scss';
import ListIconDeprecated from '@/shared/assets/icons/list-24-24.svg';
import TiledIconDeprecated from '@/shared/assets/icons/tiled-24-24.svg';

import ListIcon from '@/shared/assets/icons/burger.svg';
import TiledIcon from '@/shared/assets/icons/tile.svg';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleViewType;
  onViewChange?: (view: ArticleViewType) => void;
}

const viewTypes = [
  {
    view: ARTICLE_VIEW.SMALL,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => TiledIcon,
      off: () => TiledIconDeprecated,
    }),
  },
  {
    view: ARTICLE_VIEW.BIG,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => ListIcon,
      off: () => ListIconDeprecated,
    }),
  },
];

export const ArticleViewSelector = memo(function ArticleViewSelector({
  className,
  view,
  onViewChange,
}: ArticleViewSelectorProps) {
  const onClick = (newView: ArticleViewType) => () => {
    onViewChange?.(newView);
  };

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card
          className={classNames(cls.articleViewSelectorRedesigned, {}, [
            className,
          ])}
          border="round"
        >
          <HStack gap="8">
            {viewTypes.map((viewType) => (
              <Icon
                clickable
                key={viewType.view}
                onClick={onClick(viewType.view)}
                Svg={viewType.icon}
                className={classNames('', {
                  [cls.notSelected]: viewType.view !== view,
                })}
              />
            ))}
          </HStack>
        </Card>
      }
      off={
        <div className={classNames(cls.articleViewSelector, {}, [className])}>
          {viewTypes.map((viewType) => (
            <Button
              key={viewType.view}
              theme={ButtonTheme.CLEAR}
              onClick={onClick(viewType.view)}
            >
              <Icon
                width={24}
                height={24}
                Svg={viewType.icon}
                className={classNames('', {
                  [cls.notSelected]: viewType.view !== view,
                })}
              />
            </Button>
          ))}
        </div>
      }
    />
  );
});
