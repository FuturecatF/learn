import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/config/theme/lib/classNames';

import { Card, VStack } from '@/shared';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import { Page } from '@/widgets';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleRatingAsync } from '@/features/articleRating';
import { ArticleDetails } from '@/entities/Article';
import { getFeatureFlag, toggleFeatures } from '@/shared/lib/features';

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article');
  const { articleId } = useParams();
  const isArticleRatingEnabled = getFeatureFlag('isArticleRatingEnabled');
  const isCounterEnabled = getFeatureFlag('isCounterEnabled');
  if (!articleId) {
    return null;
  }

  const rating = toggleFeatures({
    name: 'isArticleRatingEnabled',
    on: () => <ArticleRatingAsync articleId={articleId} />,
    off: () => <Card>{t('Оченка статей скоро появится!')}</Card>,
  });

  toggleFeatures({
    name: 'isCounterEnabled',
    on: () => console.log('NEW'),
    off: () => console.log('OLD'),
  });

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page
        className={classNames(cls.articleDetailsPage, {}, [className])}
        data-testid={'ArticleDetails.Info'}
      >
        <VStack gap={'16'} maxWidth>
          <ArticleDetailsPageHeader />
          <ArticleDetails articleId={articleId} />
          {rating}
          <ArticleRecommendationsList />
          {isCounterEnabled && <ArticleDetailsComments articleId={articleId} />}
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
