import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/config/theme/lib/classNames';
import { Text, VStack } from '@/shared';
import { Comment } from '../..';
import { CommentCard } from '../CommentCard/CommentCard';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';

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
    <VStack gap="16" maxWidth className={classNames('', {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard
            isLoading={isLoading}
            comment={comment}
            key={comment.id}
          />
        ))
      ) : (
        <ToggleFeatures
          feature="isAppRedesigned"
          on={<Text text={t<string>('Комментарии отсутствуют')} />}
          off={<TextDeprecated text={t<string>('Комментарии отсутствуют')} />}
        />
      )}
    </VStack>
  );
});
