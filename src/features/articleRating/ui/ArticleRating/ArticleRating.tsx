import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Rating } from '@/entities/Rating';
import { useGetArticleRatingQuery, useRateArticleMutation } from '../../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared';

export interface ArticleRatingProps {
  articleId: string;
}

const ArticleRating = memo(function ArticleRating({ articleId }: ArticleRatingProps) {
  const { t } = useTranslation();
  const userData = useSelector(getUserAuthData);

  const { data, isLoading } = useGetArticleRatingQuery({ articleId, userId: userData?.id ?? '' });

  const [rateArticleMutation] = useRateArticleMutation();

  const handleRateArticle = useCallback((starsCount: number, feedBack?: string) => {
    try {
      rateArticleMutation({
        userId: userData?.id ?? '',
        articleId,
        rate: starsCount,
        ...(feedBack ? [{ feedBack }] : []),
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const onCancel = useCallback((starsCount: number) => {
    handleRateArticle(starsCount);
  }, []);

  const onAccept = useCallback((starsCount: number, feedBack?: string) => {
    handleRateArticle(starsCount, feedBack);
  }, []);

  if (isLoading) {
    return <Skeleton width={'100%'} height={120} />;
  }

  const rating = data?.[0];

  return (
    <Rating
      rate={rating?.rate}
      title={'Оцените статью'}
      feedBackTitle={'Оставьте свой отзыв о статье - это поможет улучшить качество'}
      onAccept={onAccept}
      onCancel={onCancel}
      hasFeedBack
    />
  );
});

export default ArticleRating;
