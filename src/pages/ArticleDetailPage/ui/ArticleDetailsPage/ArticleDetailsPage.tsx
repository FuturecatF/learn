import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/config/theme/lib/classNames';

import { memo, useCallback } from 'react';
import { ARTICLE_VIEW, ArticleDetails, ArticleList } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Page, Text, TextSize } from 'shared';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/AddCommentForm';
import { getArticleRecommendations } from '../../model/slice/articleDetailsPageRecommendationsSlice';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations';
import { fetchArticleRecommendatios } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
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
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const isLoadingComments = useSelector(getArticleCommentsIsLoading);
  const isLoadingRecommendations = useSelector(getArticleRecommendationsIsLoading);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(articleId));
    dispatch(fetchArticleRecommendatios());
  });

  const onSendCommentHandler = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );

  if (!articleId) {
    return <Page className={classNames(cls.articleDetailsPage, {}, [className])}>{t('notFoundArticle')}</Page>;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
        <ArticleDetailsPageHeader />
        <ArticleDetails articleId={articleId} />
        <Text size={TextSize.L} className={cls.commentTitle} title={t<string>('Рекомендуем')} />
        <ArticleList
          view={ARTICLE_VIEW.TILE}
          articles={recommendations}
          isLoading={isLoadingRecommendations}
          className={cls.recommendationsList}
          target="_blank"
        />
        <Text className={cls.commentTitle} title={t<string>('Комментарии')} />
        <AddCommentForm onSendComment={onSendCommentHandler} />
        <CommentList comments={comments} isLoading={isLoadingComments} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
