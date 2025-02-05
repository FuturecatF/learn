import { memo } from 'react';
import { classNames } from '@/shared/config/theme/lib/classNames';
import {
  Applink, Avatar, HStack, Skeleton, Text, VStack,
} from '@/shared';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';
import { getRouteProfile } from '@/shared/const/router';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo(function CommentCard({
  className,
  comment,
  isLoading,
}: CommentCardProps) {
  if (isLoading) {
    return (
      <div className={classNames(cls.commentCard, {}, [className, cls.loading])}>
        <HStack>
          <Skeleton width={30} height={30} borderRadius={'50%'} />
          <Skeleton width={100} height={16} className={cls.username} />
        </HStack>
        <Skeleton className={cls.text} width={'100%'} height={50} />
      </div>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <VStack className={classNames(cls.commentCard, {}, [className])} maxWidth>
      <Applink to={getRouteProfile(comment.user.id)} className={cls.header}>
        {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
        <Text className={cls.username} title={comment.user.username} />
      </Applink>
      <Text className={cls.text} text={comment.text} />
    </VStack>
  );
});
