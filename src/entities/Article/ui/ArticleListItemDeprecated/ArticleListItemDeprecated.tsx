import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import cls from '../ArticleListItem/ArticleListItem.module.scss';
import { Text } from '@/shared/ui/deprecated/Text';

import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';

import { Card } from '@/shared/ui/deprecated/Card';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';

import { Button, ButtonTheme } from '@/shared/ui/redesigned/Button';
import { ArticleListItemProps } from '../ArticleListItem/ArticleListItem';
import { Icon } from '@/shared';
import { ARTICLE_VIEW } from '../../model/consts/index';
import { ArticleTextBlock } from '../../model/types/article';
import { ARTICLE_BLOCK_TYPES } from '../../model/consts';
import { classNames } from '@/shared/config/theme/lib/classNames';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { getRouteArticlesId } from '@/shared/const/router';
import { Applink } from '@/shared/ui/deprecated/AppLink';

export const ArticleListItemDeprecated = memo((props: ArticleListItemProps) => {
  const { className, article, view, target } = props;
  const { t } = useTranslation();

  const types = <Text text={article.type.join(', ')} className={cls.types} />;
  const views = (
    <>
      <Text text={String(article.views)} className={cls.views} />
      <Icon Svg={EyeIcon} />
    </>
  );

  if (view === ARTICLE_VIEW.BIG) {
    const textBlock = article.blocks.find(
      (block) => block.type === ARTICLE_BLOCK_TYPES.TEXT,
    ) as ArticleTextBlock;

    return (
      <div
        data-testid="ArticleListItem"
        className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
      >
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text text={article.user.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <Text title={article.title} className={cls.title} />
          {types}
          <AppImage
            fallback={<Skeleton width="100%" height={250} />}
            src={article.img}
            className={cls.img}
            alt={article.title}
          />
          {textBlock && (
            <ArticleTextBlockComponent
              block={textBlock}
              className={cls.textBlock}
            />
          )}
          <div className={cls.footer}>
            <Applink target={target} to={getRouteArticlesId(article.id)}>
              <Button theme={ButtonTheme.OUTLINE}>
                {t('Читать далее...')}
              </Button>
            </Applink>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <Applink
      data-testid="ArticleListItem"
      target={target}
      to={getRouteArticlesId(article.id)}
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
    >
      <Card className={cls.card}>
        <div className={cls.imageWrapper}>
          <AppImage
            fallback={<Skeleton width={200} height={200} />}
            alt={article.title}
            src={article.img}
            className={cls.img}
          />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={cls.title} />
      </Card>
    </Applink>
  );
});
