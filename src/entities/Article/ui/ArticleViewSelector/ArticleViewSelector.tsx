import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/config/theme/lib/classNames';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import TileIcon from 'shared/assets/icons/tiled-24-24.svg';
import { ARTICLE_VIEW, ArticleViewType } from 'entities/Article';
import { Button, ButtonTheme, Icon } from 'shared';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleViewType;
  onViewChange?: (view: ArticleViewType) => void;
}

const viewTypes = [
  {
    view: ARTICLE_VIEW.LIST,
    icon: ListIcon,
  },
  {
    view: ARTICLE_VIEW.TILE,
    icon: TileIcon,
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
    <div className={classNames(cls.articleViewSelector, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button theme={ButtonTheme.CLEAR} onClick={onClick(viewType.view)}>
          <Icon className={classNames('', { [cls.selected]: view === viewType.view })} Svg={viewType.icon} />
        </Button>
      ))}
    </div>
  );
});
