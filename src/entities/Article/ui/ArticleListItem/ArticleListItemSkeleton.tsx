import { memo } from 'react';
import { classNames } from '@/shared/config/theme/lib/classNames';
import { Card, Skeleton } from '@/shared';
import { ARTICLE_VIEW } from '../../model/consts';
import { ArticleViewType } from '../../model/types/article';

import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
  className?: string;
  view: ArticleViewType;
}

export const ArticleListItemSkeleton = memo(function ArticleListItem({
  className,

  view,
}: ArticleListItemProps) {
  if (view === ARTICLE_VIEW.LIST) {
    return (
      <div className={classNames(cls.articleListItem, {}, [className, cls[view.toLowerCase()]])}>
        <Card>
          <div className={cls.header}>
            <Skeleton borderRadius={'50%'} width={30} height={30} className={cls.avatar} />
            <Skeleton width={150} height={16} className={cls.username} />
            <Skeleton width={120} height={16} className={cls.date} />
          </div>
          <Skeleton width={250} height={24} className={cls.title} />
          <Skeleton height={200} className={cls.image} />

          <div className={cls.footer}>
            <Skeleton width={200} height={36} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(cls.articleListItem, {}, [className, cls[view.toLowerCase()], cls.skeleton])}>
      <Card>
        <div className={cls.imageWrapper}>
          <Skeleton width={200} height={200} className={cls.image} />
        </div>
        <div className={cls.infoWrapper}>
          <Skeleton width={115} height={16} className={cls.types} />
        </div>
        <Skeleton width={150} height={16} className={cls.title} />
      </Card>
    </div>
  );
});
