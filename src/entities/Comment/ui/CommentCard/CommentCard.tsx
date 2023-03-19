import { memo } from 'react';
import { classNames } from 'shared/config/theme/lib/classNames';
import {
  Applink, Avatar, Skeleton, Text,
} from 'shared';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo(function CommentCard({ className, comment, isLoading }: CommentCardProps) {
  if (isLoading) {
    return (
      <div className={classNames(cls.commentCard, {}, [className, cls.loading])}>
        <div className={cls.header}>
          <Skeleton width={30} height={30} borderRadius={'50%'} />
          <Skeleton width={100} height={16} className={cls.username} />
        </div>
        <Skeleton className={cls.text} width={'100%'} height={50} />
      </div>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <div className={classNames(cls.commentCard, {}, [className])}>
      <Applink to={`${RoutePath.profile}/${comment.user.id}`} className={cls.header}>
        {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
        <Text className={cls.username} title={comment.user.username} />
      </Applink>
      <Text className={cls.text} text={comment.text} />
    </div>
  );
});
