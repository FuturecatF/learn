import { memo } from 'react';
import { classNames } from '@/shared/config/theme/lib/classNames';
import {
  Card as CardDeprecated,
  Skeleton as SkeletonDeprecated,
} from '@/shared';
import { ARTICLE_VIEW } from '../../model/consts';
import { ArticleViewType } from '../../model/types/article';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card';
import cls from './ArticleListItem.module.scss';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';

interface ArticleListItemProps {
  className?: string;
  view: ArticleViewType;
}

export const ArticleListItemSkeleton = memo(function ArticleListItem({
  className,

  view,
}: ArticleListItemProps) {
  const mainClass = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => cls.articleListItemRedesigned,
    off: () => cls.articleListItem,
  });

  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  });

  if (view === ARTICLE_VIEW.BIG) {
    const cardContent = (
      <>
        <div className={cls.header}>
          <Skeleton borderRadius="50%" height={30} width={30} />
          <Skeleton width={150} height={16} className={cls.username} />
          <Skeleton width={150} height={16} className={cls.date} />
        </div>
        <Skeleton width={250} height={24} className={cls.title} />
        <Skeleton height={200} className={cls.img} />
        <div className={cls.footer}>
          <Skeleton height={36} width={200} />
        </div>
      </>
    );
    return (
      <div className={classNames(mainClass, {}, [className, cls[view]])}>
        <ToggleFeatures
          feature="isAppRedesigned"
          on={
            <CardRedesigned border="round" className={cls.card}>
              {cardContent}
            </CardRedesigned>
          }
          off={
            <CardDeprecated className={cls.card}>{cardContent}</CardDeprecated>
          }
        />
      </div>
    );
  }

  const cardContent = (
    <>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Skeleton
            width="100%"
            height={150}
            borderRadius="32px"
            className={cls.img}
          />
        }
        off={
          <div className={cls.imageWrapper}>
            <Skeleton width={200} height={200} className={cls.img} />
          </div>
        }
      />
      <div className={cls.infoWrapper}>
        <Skeleton width={130} height={16} />
      </div>
      <Skeleton width={150} height={16} className={cls.title} />
    </>
  );
  // if (view === ARTICLE_VIEW.BIG) {
  //   return (
  //     <div
  //       className={classNames(cls.articleListItem, {}, [
  //         className,
  //         cls[view.toLowerCase()],
  //       ])}
  //     >
  //       <CardDeprecated>
  //         <div className={cls.header}>
  //           <SkeletonDeprecated
  //             borderRadius={'50%'}
  //             width={30}
  //             height={30}
  //             className={cls.avatar}
  //           />
  //           <SkeletonDeprecated
  //             width={150}
  //             height={16}
  //             className={cls.username}
  //           />
  //           <SkeletonDeprecated width={120} height={16} className={cls.date} />
  //         </div>
  //         <SkeletonDeprecated width={250} height={24} className={cls.title} />
  //         <SkeletonDeprecated height={200} className={cls.image} />
  //
  //         <div className={cls.footer}>
  //           <SkeletonDeprecated width={200} height={36} />
  //         </div>
  //       </CardDeprecated>
  //     </div>
  //   );
  // }

  return (
    <div className={classNames(mainClass, {}, [className, cls[view.toLowerCase()]])}>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <CardRedesigned border="round" className={cls.card}>
            {cardContent}
          </CardRedesigned>
        }
        off={
          <CardDeprecated className={cls.card}>
            {cardContent}
          </CardDeprecated>
        }
      />
    </div>
  )
  ;
});
