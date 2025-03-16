import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/config/theme/lib/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  AppImage,
  Avatar,
  HStack,
  Icon,
  Text,
  TextAlign,
  TextSize,
  VStack,
} from '@/shared';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import cls from './ArticleDetails.module.scss';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { renderArticleBlock } from './renderBlock';

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

interface ArticleDetailsProps {
  className?: string;
  articleId?: string;
}

const Deprecated = () => {
  const article = useSelector(getArticleDetailsData);
  return (
    <>
      <HStack justify="center" maxWidth className={cls.avatarWrapper}>
        <Avatar size={200} src={article?.img} className={cls.avatar} />
      </HStack>
      <VStack gap="4" maxWidth data-testid="ArticleDetails.Info">
        <TextDeprecated
          className={cls.title}
          title={article?.title}
          text={article?.subtitle}
          size={TextSize.L}
        />
        <HStack gap="8" className={cls.articleInfo}>
          <Icon className={cls.icon} Svg={EyeIcon} />
          <TextDeprecated text={String(article?.views)} />
        </HStack>
        <HStack gap="8" className={cls.articleInfo}>
          <Icon className={cls.icon} Svg={CalendarIcon} />
          <TextDeprecated text={article?.createdAt} />
        </HStack>
      </VStack>
      {article?.blocks.map(renderArticleBlock)}
    </>
  );
};

const Redesigned = () => {
  const article = useSelector(getArticleDetailsData);

  return (
    <>
      <Text title={article?.title} size="size_l" bold />
      <Text title={article?.subtitle} />
      <AppImage
        fallback={
          <SkeletonRedesigned width="100%" height={420} borderRadius="16px" />
        }
        src={article?.img}
        className={cls.img}
      />
      {article?.blocks.map(renderArticleBlock)}
    </>
  );
};

export const ArticleDetailsSkeleton = () => {
  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  });
  return (
    <VStack gap="16" maxWidth>
      <Skeleton
        className={cls.avatar}
        width={200}
        height={200}
        borderRadius="50%"
      />
      <Skeleton className={cls.title} width={300} height={32} />
      <Skeleton className={cls.skeleton} width={600} height={24} />
      <Skeleton className={cls.skeleton} width="100%" height={200} />
      <Skeleton className={cls.skeleton} width="100%" height={200} />
    </VStack>
  );
};

export const ArticleDetails = memo(function ArticleDetails({
  className,
  articleId,
}: ArticleDetailsProps) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);

  useEffect(() => {
    if (articleId && __PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(articleId));
    }
  }, [dispatch, articleId]);

  let content;
  if (isLoading) {
    content = <ArticleDetailsSkeleton />;
  } else if (error) {
    content = (
      <TextDeprecated
        align={TextAlign.CENTER}
        title={t<string>('Произошла ошибка при загрузке статьи.')}
      />
    );
  } else {
    content = (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<Redesigned />}
        off={<Deprecated />}
      />
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <VStack
        gap="16"
        className={classNames(cls.articleDetails, {}, [className])}
      >
        {content}
      </VStack>
    </DynamicModuleLoader>
  );
});
