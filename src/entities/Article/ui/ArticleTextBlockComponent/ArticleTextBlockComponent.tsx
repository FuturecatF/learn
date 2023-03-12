import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/config/theme/lib/classNames';

import { memo } from 'react';
import { ArticleTextBlock } from 'entities/Article/model/types/article';
import { Text } from 'shared';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(function ArticleTextBlockComponent({
  className,
  block,
}: ArticleTextBlockComponentProps) {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.articleTextBlockComponent, {}, [className])}>
      {block.title && <Text title={block.title} className={cls.title} />}
      {block.paragraphs.map((paragraph, index) => (
        <Text key={paragraph} text={paragraph} className={cls.paragraph} />
      ))}
    </div>
  );
});
