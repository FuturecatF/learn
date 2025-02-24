import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './ArticlesFilters.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';

import { SortOrder } from '@/shared/types/sort';

import SearchIcon from '@/shared/assets/icons/search.svg';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { ArticleSortFields, ArticleTypes } from '@/entities/Article';
import { classNames } from '@/shared/config/theme/lib/classNames';
import { VStack } from '@/shared';
import { Input } from '@/shared/ui/redesigned/Input';

interface ArticlesFiltersProps {
  className?: string;
  sort: ArticleSortFields;
  order: SortOrder;
  type: ArticleTypes;
  search: string;
  onChangeSearch: (value: string) => void;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortFields) => void;
  onChangeType: (type: ArticleTypes) => void;
}

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
  const {
    className,
    onChangeType,
    onChangeSearch,
    search,
    onChangeSort,
    sort,
    onChangeOrder,
    order,
    type,
  } = props;
  const { t } = useTranslation();

  return (
    <Card
      className={classNames(cls.articlesFilters, {}, [className])}
      padding="24"
    >
      <VStack gap="32" maxWidth>
        <Input
          onChange={onChangeSearch}
          value={search}
          size="s"
          placeholder={t<string>('Поиск')}
          addonLeft={<Icon Svg={SearchIcon} />}
        />
        <ArticleTypeTabs
          value={type}
          onChangeType={onChangeType}
          className={cls.tabs}
        />
        <ArticleSortSelector
          order={sort}
          sort={order}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
      </VStack>
    </Card>
  );
});
