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
import {
  getFeatureFlag,
  ToggleFeatures,
  toggleFeatures,
} from '@/shared/lib/features';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout/StickyContentLayout';
import { AdditionalInfoContainer } from '../AdditionalInfoContainer/AdditionalInfoContainer';
import { DetailsContainer } from '../DetailsContainer/DetailsContainer';

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

  const rating = <ArticleRatingAsync articleId={articleId} />;

  toggleFeatures({
    name: 'isCounterEnabled',
    on: () => console.log('NEW'),
    off: () => console.log('OLD'),
  });

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <StickyContentLayout
            content={
              <Page
                className={classNames(cls.ArticleDetailsPage, {}, [className])}
              >
                <VStack gap="16">
                  <DetailsContainer />
                  <ArticleRatingAsync articleId={articleId} />
                  <ArticleRecommendationsList />
                  <ArticleDetailsComments articleId={articleId} />
                </VStack>
              </Page>
            }
            right={<AdditionalInfoContainer />}
          />
        }
        off={
          <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <VStack gap="16">
              <ArticleDetailsPageHeader />
              <ArticleDetails articleId={articleId} />
              <ToggleFeatures
                feature="isArticleRatingEnabled"
                on={<ArticleRatingAsync articleId={articleId} />}
                off={<Card>{t('Оценка статей скоро появится!')}</Card>}
              />
              <ArticleRecommendationsList />
              <ArticleDetailsComments articleId={articleId} />
            </VStack>
          </Page>
        }
      />
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
