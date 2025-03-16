import { memo } from 'react';
import { classNames } from '@/shared/config/theme/lib/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(function ArticleTextBlockComponent({
  className,
  block,
}: ArticleTextBlockComponentProps) {
  return (
    <div
      className={classNames(cls.articleTextBlockComponent, {}, [
        className,
      ])}
    >
      {block.title && (
        <ToggleFeatures
          feature="isAppRedesigned"
          on={<Text title={block.title} className={cls.title} />}
          off={
            <TextDeprecated
              title={block.title}
              className={cls.title}
            />
          }
        />
      )}
      {block.paragraphs.map((paragraph, index) => (
        <ToggleFeatures
          feature="isAppRedesigned"
          on={
            <Text
              key={paragraph}
              text={paragraph}
              className={cls.paragraph}
            />
          }
          off={
            <TextDeprecated
              key={paragraph}
              text={paragraph}
              className={cls.paragraph}
            />
          }
        />
      ))}
    </div>
  );
});
