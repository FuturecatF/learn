import { EntityState } from '@reduxjs/toolkit';
import {
  Article, ArticleViewType, ArticleSortFields, ArticleTypes,
} from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';

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
