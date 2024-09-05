import { rtkApi } from '@/shared/api/rtkApi';
import { RatingSchema } from '@/entities/Rating';

interface GetArticleRatingArg {
  userId: string;
  articleId: string;
}

interface RateArticleRatingArg {
  userId: string;
  articleId: string;
  rate: number;
  feedBack?: number;
}

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<RatingSchema[], GetArticleRatingArg>({
      query: ({ userId, articleId }) => ({
        url: '/article-ratings',
        params: {
          userId,
          articleId,
        },
      }),
    }),
    rateArticle: build.mutation<RatingSchema[], RateArticleRatingArg>({
      query: (body) => ({
        url: '/article-ratings',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetArticleRatingQuery, useRateArticleMutation } = articleRatingApi;
