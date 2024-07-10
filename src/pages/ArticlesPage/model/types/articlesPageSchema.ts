import { Article, ArticleViewType } from '@/entities/Article';
import { EntityState } from '@reduxjs/toolkit';
import { ArticleSortFields, ArticleTypes } from '@/entities/Article/model/types/article';
import { SortOrder } from '@/shared/types';

export interface articlesPageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
  view: ArticleViewType;
  page: number;
  limit: number;
  hasMore: boolean;
  order: SortOrder;
  sort: ArticleSortFields;
  search: string;
  type: ArticleTypes;
  _inited: boolean;
}
