import { User } from 'entities/User';

export const ARTICLE_BLOCK_TYPES = {
  TEXT: 'TEXT',
  CODE: 'CODE',
  IMAGE: 'IMAGE',
} as const;

export type ArticleBlockTypes = ValueOf<typeof ARTICLE_BLOCK_TYPES>;

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

export const ARTICLE_TYPES = {
  IT: 'IT',
  SCIENCE: 'SCIENCE',
  ECONOMICS: 'ECONOMICS',
} as const;

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

export const ARTICLE_VIEW = {
  LIST: 'LIST',
  TILE: 'TILE',
} as const;

export type ArticleViewType = ValueOf<typeof ARTICLE_VIEW>;
