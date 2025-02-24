import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/config/theme/lib/classNames';
import { Text, TextSize, VStack } from '@/shared';
import { ARTICLE_VIEW, ArticleList } from '@/entities/Article';
import { useGetArticleRecommendationsListQuery } from '../../api/articleRecommendationsApi';
import cls from './ArticleRecommendationsList.module.scss';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo(
  (props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const {
      isLoading,
      data: articles,
      error,
    } = useGetArticleRecommendationsListQuery(4);

    if (!articles || isLoading || error) {
      return null;
    }

    return (
      <VStack
        gap="8"
        className={classNames('', {}, [className])}
        maxWidth
        data-testid={'ArticleRecommendationsList'}
      >
        <Text size={TextSize.L} title={t<string>('Рекомендуем')} />
        <ArticleList
          className={cls.list}
          view={ARTICLE_VIEW.SMALL}
          articles={articles}
          target="_blank"
        />
      </VStack>
    );
  },
);
