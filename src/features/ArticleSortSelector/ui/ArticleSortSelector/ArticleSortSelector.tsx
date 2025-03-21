import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/config/theme/lib/classNames';

import { ListBox, Select, SORT_ORDER, VStack } from '@/shared';
import { ARTICLE_SORT_FIELD, ArticleSortFields } from '@/entities/Article';
import cls from './ArticleSortSelector.module.scss';
import { SortOrder } from '@/shared/types/sort';
import { SelectOption } from '@/shared/ui/deprecated/Select/types';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleSortSelectorProps {
  className?: string;
  sort: SortOrder;
  order: ArticleSortFields;
  onChangeOrder: (order: SortOrder) => void;
  onChangeSort: (sort: ArticleSortFields) => void;
}

export const ArticleSortSelector = memo(function ArticleSortSelector({
  className,
  sort,
  order,
  onChangeSort,
  onChangeOrder,
}: ArticleSortSelectorProps) {
  const { t } = useTranslation('article');

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      {
        value: SORT_ORDER.ASC,
        content: t(`filter.orders.${SORT_ORDER.ASC}`),
      },
      {
        value: SORT_ORDER.DESC,
        content: t(`filter.orders.${SORT_ORDER.DESC}`),
      },
    ],
    [t],
  );

  const sortFieldOptions = useMemo<SelectOption<ArticleSortFields>[]>(
    () => [
      {
        value: ARTICLE_SORT_FIELD.CREATED,
        content: t(`filter.sort.${ARTICLE_SORT_FIELD.CREATED}`),
      },
      {
        value: ARTICLE_SORT_FIELD.VIEWS,
        content: t(`filter.sort.${ARTICLE_SORT_FIELD.VIEWS}`),
      },
      {
        value: ARTICLE_SORT_FIELD.TITLE,
        content: t(`filter.sort.${ARTICLE_SORT_FIELD.TITLE}`),
      },
    ],
    [t],
  );

  const changeSortHandler = useCallback(
    (newSort: string) => {
      onChangeSort(newSort as ArticleSortFields);
    },
    [onChangeSort],
  );

  const changeOrderHandler = useCallback(
    (newOrder: string) => {
      onChangeOrder(newOrder as SortOrder);
    },
    [onChangeOrder],
  );

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <div
          className={classNames(cls.articleSortSelectorRedesigned, {}, [
            className,
          ])}
        >
          <VStack gap="8">
            <Text text={t<string>('Сортировать по:')} />
            <ListBox
              items={sortFieldOptions}
              value={order}
              onChange={onChangeSort}
            />
            <ListBox
              items={orderOptions}
              value={sort}
              onChange={onChangeOrder}
            />
          </VStack>
        </div>
      }
      off={
        <div className={classNames(cls.articleSortSelector, {}, [className])}>
          <Select
            value={sort}
            onChange={changeOrderHandler}
            options={orderOptions}
            label={t<string>('Sort by')}
          />
          <Select<ArticleSortFields>
            className={cls.order}
            value={order}
            onChange={changeSortHandler}
            options={sortFieldOptions}
            label={t<string>('Filter by')}
          />
        </div>
      }
    />
  );
});
