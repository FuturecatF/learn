import { classNames } from '@/shared/config/theme/lib/classNames';
import { memo } from 'react';
import { Code } from '@/shared';
import { ArticleCodeBlock } from '../../model/types/article';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(function ArticleCodeBlockComponent({
  className,
  block,
}: ArticleCodeBlockComponentProps) {
  return (
    <div className={classNames(cls.articleCodeBlockComponent, {}, [className])}>
      <Code text={block.code} />
    </div>
  );
});
