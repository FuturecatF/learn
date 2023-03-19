import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/config/theme/lib/classNames';
import { Comment } from 'entities/Comment';
import { Text } from 'shared';
import { CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo(function CommentList({ className, comments, isLoading }: CommentListProps) {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(cls.commentList, {}, [className])}>
        <CommentCard className={cls.comment} isLoading />
        <CommentCard className={cls.comment} isLoading />
        <CommentCard className={cls.comment} isLoading />
      </div>
    );
  }

  return (
    <div className={classNames(cls.commentList, {}, [className])}>
      {comments && comments.length ? (
        comments.map((comment) => (
          <CommentCard className={cls.comment} key={comment.id} comment={comment} isLoading={isLoading} />
        ))
      ) : (
        <Text text={t<string>('Комментариев нет')} />
      )}
    </div>
  );
});
