import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsCommentsReducer, ArticleDetailsPageSchema } from 'pages/ArticleDetailPage';
import { articleDetailsPageRecommendationsReducer } from 'pages/ArticleDetailPage/model/slice/articleDetailsPageRecommendationsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  comments: articleDetailsCommentsReducer,
  recommendations: articleDetailsPageRecommendationsReducer,
});
