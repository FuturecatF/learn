import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/config/theme/lib/classNames';

import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Text } from 'shared';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { getArticleCommentsError, getArticleCommentsIsLoading } from 'pages/ArticleDetailPage/model/selectors/comments';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentsByArticleId } from 'pages/ArticleDetailPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/AddCommentForm';
import { addCommentForArticle } from 'pages/ArticleDetailPage/model/services/addCommentForArticle/addCommentForArticle';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};
interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article');
  const { articleId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const isLoadingComments = useSelector(getArticleCommentsIsLoading);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(articleId));
  });

  const onSendCommentHandler = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.articleDetailsPage, {}, [className])}>
        <Button onClick={onBackToList}>{t('backward')}</Button>
        <ArticleDetails articleId={articleId} />
        <Text className={cls.commentTitle} title={t<string>('Комментарии')} />
        <AddCommentForm onSendComment={onSendCommentHandler} />
        <CommentList comments={comments} isLoading={isLoadingComments} />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
