import { HTMLAttributeAnchorTarget, memo } from 'react';

import { Article, ArticleViewType } from '../../model/types/article';
import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleListItemRedesigned } from '../ArticleListItemRedesigned/ArticleListItemRedesigned';
import { ArticleListItemDeprecated } from '../ArticleListItemDeprecated/ArticleListItemDeprecated';

export interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleViewType;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => (
  <ToggleFeatures
    feature="isAppRedesigned"
    on={<ArticleListItemRedesigned {...props} />}
    off={<ArticleListItemDeprecated {...props} />}
  />
));
