import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './ArticleListItemRedesigned.module.scss';

import { Text } from '@/shared/ui/redesigned/Text';
import { Icon } from '@/shared/ui/redesigned/Icon';
import EyeIcon from '@/shared/assets/icons/eye.svg';

import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

import { Button } from '@/shared/ui/redesigned/Button';
import { Applink, HStack, VStack } from '@/shared';
import { ARTICLE_BLOCK_TYPES, ARTICLE_VIEW } from '../../model/consts';
import { ArticleTextBlock } from '../../model/types/article';
import { ArticleListItemProps } from '../ArticleListItem/ArticleListItem';
import { classNames } from '@/shared/config/theme/lib/classNames';
import { getRouteArticlesId } from '@/shared/const/router';

export const ArticleListItemRedesigned = memo((props: ArticleListItemProps) => {
  const { className, article, view, target } = props;
  const { t } = useTranslation();

  const userInfo = (
    <>
      <Avatar size={32} src={article.user.avatar} className={cls.avatar} />
      <Text bold text={article.user.username} />
    </>
  );
  const views = (
    <HStack gap="8" justify={'end'}>
      <Icon Svg={EyeIcon} />
      <Text text={String(article.views)} className={cls.views} />
    </HStack>
  );

  if (view === ARTICLE_VIEW.BIG) {
    const textBlock = article.blocks.find(
      (block) => block.type === ARTICLE_BLOCK_TYPES.TEXT,
    ) as ArticleTextBlock;

    return (
      <Card
        padding="24"
        max
        data-testid="ArticleListItem"
        className={classNames(cls.articleListItem, {}, [className, cls[view]])}
      >
        <VStack maxWidth gap="16">
          <HStack gap="8" maxWidth>
            {userInfo}
            <Text text={article.createdAt} />
          </HStack>
          <Text title={article.title} bold />
          <Text title={article.subtitle} size="size_s" />
          <AppImage
            fallback={<Skeleton width="100%" height={250} />}
            src={article.img}
            className={cls.img}
            alt={article.title}
          />
          {textBlock?.paragraphs && (
            <Text
              className={cls.textBlock}
              text={textBlock.paragraphs.slice(0, 2).join(' ')}
            />
          )}
          <HStack maxWidth justify="between">
            <Applink target={target} to={getRouteArticlesId(article.id)}>
              <Button theme="outline">{t('Читать далее...')}</Button>
            </Applink>
            {views}
          </HStack>
        </VStack>
      </Card>
    );
  }

  return (
    <Applink
      data-testid="ArticleListItem"
      target={target}
      to={getRouteArticlesId(article.id)}
      className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
    >
      <Card className={cls.card} border="partial" padding="0">
        <AppImage
          fallback={<Skeleton width="100%" height={200} />}
          alt={article.title}
          src={article.img}
          className={cls.img}
        />
        <VStack className={cls.info} gap="4">
          <Text title={article.title} className={cls.title} />
          <VStack gap="4" className={cls.footer} maxWidth>
            <HStack justify="between" maxWidth>
              <Text text={article.createdAt} className={cls.date} />
              {views}
            </HStack>
            <HStack gap="4">{userInfo}</HStack>
          </VStack>
        </VStack>
      </Card>
    </Applink>
  );
});
