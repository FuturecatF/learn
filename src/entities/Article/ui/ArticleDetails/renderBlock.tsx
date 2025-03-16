import { ArticleBlock } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import cls from './ArticleDetails.module.scss';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ARTICLE_BLOCK_TYPES } from '../../model/consts';

export const renderArticleBlock = (block: ArticleBlock) => {
  switch (block.type) {
  case ARTICLE_BLOCK_TYPES.CODE:
    return (
      <ArticleCodeBlockComponent
        key={block.id}
        block={block}
        className={cls.block}
      />
    );
  case ARTICLE_BLOCK_TYPES.IMAGE:
    return (
      <ArticleImageBlockComponent
        key={block.id}
        block={block}
        className={cls.block}
      />
    );
  case ARTICLE_BLOCK_TYPES.TEXT:
    return (
      <ArticleTextBlockComponent
        key={block.id}
        className={cls.block}
        block={block}
      />
    );
  default:
    return null;
  }
};
