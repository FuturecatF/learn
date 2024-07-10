import { classNames } from '@/shared/config/theme/lib/classNames';
import { memo } from 'react';
import { Text } from '@/shared';
import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(function ArticleImageBlockComponent({
  className,
  block,
}: ArticleImageBlockComponentProps) {
  return (
    <div className={classNames(cls.articleImageBlockComponent, {}, [className])}>
      <img src={block.src} className={cls.img} alt={block.title || 'Картинка'} />
      {block.title && <Text text={block.title} />}
    </div>
  );
});
