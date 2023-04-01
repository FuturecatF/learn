import { ArticleDetailsCommentsSchema, ArticleDetailsPageRecommendationsSchema } from 'pages/ArticleDetailPage';

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentsSchema;
  recommendations: ArticleDetailsPageRecommendationsSchema;
}
