import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/config/theme/lib/classNames';
import { memo } from 'react';
import { Text } from 'shared';
import { ArticleImageBlock } from 'entities/Article/model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(function ArticleImageBlockComponent({
  className,
  block,
}: ArticleImageBlockComponentProps) {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.articleImageBlockComponent, {}, [className])}>
      <img src={block.src} className={cls.img} alt={block.title || 'Картинка'} />
      {block.title && <Text text={block.title} />}
    </div>
  );
});
