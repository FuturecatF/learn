import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/config/theme/lib/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { memo, useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  Avatar, Icon, Skeleton, Text, TextAlign, TextSize,
} from 'shared';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import { ArticleCodeBlockComponent } from 'entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from 'entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from 'entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ARTICLE_BLOCK_TYPES, ArticleBlock } from '../../model/types/article';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import cls from './ArticleDetails.module.scss';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

interface ArticleDetailsProps {
  className?: string;
  articleId?: string;
}

export const ArticleDetails = memo(function ArticleDetails({ className, articleId }: ArticleDetailsProps) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);
  const article = useSelector(getArticleDetailsData);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
    case ARTICLE_BLOCK_TYPES.CODE:
      return <ArticleCodeBlockComponent key={block.id} className={cls.block} block={block} />;
    case ARTICLE_BLOCK_TYPES.IMAGE:
      return <ArticleImageBlockComponent key={block.id} className={cls.block} block={block} />;
    case ARTICLE_BLOCK_TYPES.TEXT:
      return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block} />;
    default:
      return null;
    }
  }, []);

  useEffect(() => {
    if (articleId && __PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(articleId));
    }
  }, [dispatch, articleId]);

  let content;
  if (isLoading) {
    content = (
      <>
        <Skeleton className={cls.avatar} width={200} height={200} borderRadius={'50%'} />
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width={'100%'} height={200} />
        <Skeleton className={cls.skeleton} width={'100%'} height={200} />
      </>
    );
  } else if (error) {
    content = <Text text={t<string>('Произошла Error')} align={TextAlign.CENTER} />;
  } else {
    content = (
      <>
        <Avatar size={200} src={article?.img} className={cls.avatar} />
        <Text className={cls.title} title={article?.title} text={article?.subtitle} size={TextSize.L} />
        <div className={cls.articleInfo}>
          <Icon Svg={EyeIcon} className={cls.icon} />
          <Text text={String(article?.views)} />
        </div>
        <div className={cls.articleInfo}>
          <Icon Svg={CalendarIcon} className={cls.icon} />
          <Text text={article?.createdAt} />
        </div>
        {article?.blocks.map(renderBlock)}
      </>
    );
  }
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.articleDetails, {}, [className])}>{content}</div>
    </DynamicModuleLoader>
  );
});
