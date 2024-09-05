import { FC, lazy, Suspense } from 'react';
import { ArticleRatingProps } from './ArticleRating';
import { Skeleton } from '@/shared';

const ArticleRatingAsyncComponent = lazy<FC<ArticleRatingProps>>(
  () =>
    new Promise((resolve) => {
      setTimeout(
        () =>
        // @ts-ignore
          resolve(import('./ArticleRating')),
        2500,
      );
    }),
);

export const ArticleRatingAsync = (props: ArticleRatingProps) => (
  <Suspense fallback={<Skeleton width={'100%'} height={120} />}>
    <ArticleRatingAsyncComponent {...props} />
  </Suspense>
);
