import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/config/theme/lib/classNames';
import { Text, VStack } from '@/shared';
import { Comment } from '@/entities/Comment';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo(function CommentList({
  className,
  comments,
  isLoading,
}: CommentListProps) {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <VStack gap={'16'} className={classNames('', {}, [className])} maxWidth>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </VStack>
    );
  }

  return (
    <VStack gap={'16'} className={classNames('', {}, [className])} maxWidth data-testid={'CommentCard.Content'}>
      {comments && comments.length ? (
        comments.map((comment) => <CommentCard key={comment.id} comment={comment} isLoading={isLoading} />)
      ) : (
        <Text text={t<string>('Комментариев нет')} />
      )}
    </VStack>
  );
});
