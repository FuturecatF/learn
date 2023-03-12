import { memo } from 'react';
import { classNames } from 'shared/config/theme/lib/classNames';
import { Avatar, Skeleton, Text } from 'shared';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo(function CommentCard({ className, comment, isLoading }: CommentCardProps) {
  if (isLoading) {
    return (
      <div className={classNames(cls.commentCard, {}, [className])}>
        <div className={cls.header}>
          <Skeleton width={30} height={30} borderRadius={'50%'} />
          <Skeleton width={100} height={16} className={cls.username} />
        </div>
        <Skeleton className={cls.text} width={'100%'} height={50} />
      </div>
    );
  }
  return (
    <div className={classNames(cls.commentCard, {}, [className])}>
      <div className={cls.header}>
        {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
        <Text className={cls.username} title={comment.user.username} />
      </div>
      <Text className={cls.text} text={comment.text} />
    </div>
  );
});
