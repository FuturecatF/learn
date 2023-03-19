import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/config/theme/lib/classNames';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Article, ARTICLE_VIEW, ArticleViewType } from 'entities/Article';
import {
  Avatar, Button, Card, Icon, Text, useHover,
} from 'shared';
import { ARTICLE_BLOCK_TYPES, ArticleTextBlock } from 'entities/Article/model/types/article';
import { ArticleTextBlockComponent } from 'entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleViewType;
}

export const ArticleListItem = memo(function ArticleListItem({ className, article, view }: ArticleListItemProps) {
  const { t } = useTranslation();
  const [isHover, bindHover] = useHover();
  const navigate = useNavigate();

  const onOpenArticle = useCallback(() => {
    navigate(`${RoutePath.article_details}/${article.id}`);
  }, [navigate, article.id]);

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
          <img src={article.img} className={cls.image} alt={article.title} />
          {textBlock && <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />}
          <div className={cls.footer}>
            <Button onClick={onOpenArticle}>{t('readMore')}</Button>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div
      {...bindHover}
      className={classNames(cls.articleListItem, {}, [className, cls[view.toLowerCase()]])}
      onClick={onOpenArticle}
    >
      <Card>
        <div className={cls.imageWrapper}>
          <img src={article.img} alt={article.title} className={cls.image} />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={cls.title} />
      </Card>
    </div>
  );
});
