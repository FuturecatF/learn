import { Article, ArticleViewType } from 'entities/Article';
import { EntityState } from '@reduxjs/toolkit';

export interface articlesPageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
  view: ArticleViewType;
}
