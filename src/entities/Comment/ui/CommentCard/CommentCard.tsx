import { memo } from 'react';
import { classNames } from '@/shared/config/theme/lib/classNames';
import {
  Applink, Avatar as AvatarDeprecated, HStack, Skeleton, Text, VStack,
} from '@/shared';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';
import { getRouteProfile } from '@/shared/const/router';
import { Card } from '@/shared/ui/redesigned/Card';
import { ToggleFeatures } from '@/shared/lib/features';
import { Applink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { Avatar  } from '@/shared/ui/redesigned/Avatar';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';

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
      <VStack
        data-testid="CommentCard.Loading"
        gap="8"
        maxWidth
        className={classNames(cls.CommentCard, {}, [
          className,
          cls.loading,
        ])}
      >
        <div className={cls.header}>
          <Skeleton width={30} height={30} borderRadius="50%" />
          <Skeleton
            height={16}
            width={100}
            className={cls.username}
          />
        </div>
        <Skeleton className={cls.text} width="100%" height={50} />
      </VStack>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card padding="24" border="partial" max>
          <VStack
            data-testid="CommentCard.Content"
            gap="8"
            maxWidth
            className={classNames(cls.CommentCardRedesigned, {}, [
              className,
            ])}
          >
            <Applink to={getRouteProfile(comment.user.id)}>
              <HStack gap="8">
                {comment.user.avatar ? (
                  <Avatar
                    size={30}
                    src={comment.user.avatar}
                  />
                ) : null}
                <Text text={comment.user.username} bold />
              </HStack>
            </Applink>
            <Text text={comment.text} />
          </VStack>
        </Card>
      }
      off={
        <VStack
          data-testid="CommentCard.Content"
          gap="8"
          maxWidth
          className={classNames(cls.CommentCard, {}, [className])}
        >
          <AppLinkDeprecated
            to={getRouteProfile(comment.user.id)}
            className={cls.header}
          >
            {comment.user.avatar ? (
              <AvatarDeprecated
                size={30}
                src={comment.user.avatar}
              />
            ) : null}
            <TextDeprecated
              className={cls.username}
              title={comment.user.username}
            />
          </AppLinkDeprecated>
          <TextDeprecated className={cls.text} text={comment.text} />
        </VStack>
      }
    />
  );
});
