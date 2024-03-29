import { User } from 'entities/User';
import {
  ARTICLE_BLOCK_TYPES, ARTICLE_SORT_FIELD, ARTICLE_TYPES, ARTICLE_VIEW,
} from '../consts';

export type ArticleBlockTypes = ValueOf<typeof ARTICLE_BLOCK_TYPES>;

export type ArticleSortFields = ValueOf<typeof ARTICLE_SORT_FIELD>;

export interface ArticleBlockBase {
  id: string;
  type: ArticleBlockTypes;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: typeof ARTICLE_BLOCK_TYPES.CODE;
  code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: typeof ARTICLE_BLOCK_TYPES.IMAGE;
  src: string;
  title: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: typeof ARTICLE_BLOCK_TYPES.TEXT;
  title: string;
  paragraphs: string[];
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

export type ArticleTypes = ValueOf<typeof ARTICLE_TYPES>;

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleTypes[];
  user: User;
  blocks: ArticleBlock[];
}

export type ArticleViewType = ValueOf<typeof ARTICLE_VIEW>;
