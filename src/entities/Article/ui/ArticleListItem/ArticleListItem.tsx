import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/config/theme/lib/classNames';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import {
  AppImage, Applink, Avatar, Button, Card, Icon, Skeleton, Text, useHover,
} from '@/shared';
import { ARTICLE_BLOCK_TYPES, ARTICLE_VIEW } from '../../model/consts';
import { Article, ArticleViewType, ArticleTextBlock } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';
import { getRouteArticlesId } from '@/shared/const/router';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleViewType;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo(function ArticleListItem({
  className,
  article,
  view,
  target,
}: ArticleListItemProps) {
  const { t } = useTranslation();
  const [isHover, bindHover] = useHover();

  const types = <Text text={article.type.join(', ')} className={cls.types} />;
  const views = (
    <>
      <Text text={String(article.views)} className={cls.views} />
      <Icon Svg={EyeIcon} />
    </>
  );

  if (view === ARTICLE_VIEW.LIST) {
    const textBlock = article.blocks.find((block) => block.type === ARTICLE_BLOCK_TYPES.TEXT) as ArticleTextBlock;
    return (
      <div className={classNames(cls.articleListItem, {}, [className, cls[view.toLowerCase()]])}>
        <Card>
          <div className={cls.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text text={article.user.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <Text title={article.title} className={cls.title} />
          {types}
          <AppImage
            fallback={<Skeleton width={'100%'} height={250} />}
            src={article.img}
            className={cls.image}
            alt={article.title}
          />
          {textBlock && <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />}
          <div className={cls.footer}>
            <Applink target={target} to={getRouteArticlesId(article.id)}>
              <Button>{t('readMore')}</Button>
            </Applink>

            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <Applink target={target} to={getRouteArticlesId(article.id)}>
      <div {...bindHover} className={classNames(cls.articleListItem, {}, [className, cls[view.toLowerCase()]])}>
        <Card>
          <div className={cls.imageWrapper}>
            <AppImage
              fallback={<Skeleton width={200} height={200} />}
              src={article.img}
              alt={article.title}
              className={cls.image}
            />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <div className={cls.infoWrapper}>
            {types}
            {views}
          </div>
          <Text text={article.title} className={cls.title} />
        </Card>
      </div>
    </Applink>
  );
});
