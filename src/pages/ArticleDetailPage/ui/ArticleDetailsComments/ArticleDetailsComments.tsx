import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/config/theme/lib/classNames';

import {
  Text, useAppDispatch, useInitialEffect, VStack,
} from 'shared';
import { AddCommentForm } from 'features/AddCommentForm';
import { CommentList } from 'entities/Comment';
import { useSelector } from 'react-redux';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import cls from './ArticleDetailsComments.module.scss';

interface ArticleDetailsCommentsProps {
  className?: string;
  articleId?: string;
}

export const ArticleDetailsComments = memo(function ArticleDetailsComments({
  className,
  articleId,
}: ArticleDetailsCommentsProps) {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const isLoadingComments = useSelector(getArticleCommentsIsLoading);
  const comments = useSelector(getArticleComments.selectAll);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(articleId));
  });
  const onSendCommentHandler = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );
  return (
    <VStack gap={'8'} className={classNames('', {}, [className])} maxWidth>
      <Text className={cls.commentTitle} title={t<string>('Комментарии')} />
      <AddCommentForm onSendComment={onSendCommentHandler} />
      <CommentList comments={comments} isLoading={isLoadingComments} />
    </VStack>
  );
});
