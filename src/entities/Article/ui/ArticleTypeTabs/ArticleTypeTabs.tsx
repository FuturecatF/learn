import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { TabItem, Tabs } from '@/shared';
import { ARTICLE_TYPES } from '../../model/consts';
import { ArticleTypes } from '../../model/types/article';

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleTypes;
  onChangeType: (type: ArticleTypes) => void;
}

export const ArticleTypeTabs = memo(function ArticleTypeTabs({ className, value, onChangeType }: ArticleTypeTabsProps) {
  const { t } = useTranslation();

  const typeTabs = useMemo<TabItem[]>(
    () => [
      {
        value: ARTICLE_TYPES.ALL,
        content: t(`filter.tabs.${ARTICLE_TYPES.ALL}`),
      },
      {
        value: ARTICLE_TYPES.IT,
        content: t(`filter.tabs.${ARTICLE_TYPES.IT}`),
      },
      {
        value: ARTICLE_TYPES.ECONOMICS,
        content: t(`filter.tabs.${ARTICLE_TYPES.ECONOMICS}`),
      },
      {
        value: ARTICLE_TYPES.SCIENCE,
        content: t(`filter.tabs.${ARTICLE_TYPES.SCIENCE}`),
      },
    ],
    [t],
  );

  const onTabChangeHandler = useCallback(
    (tab: TabItem) => {
      onChangeType(tab.value as ArticleTypes);
    },
    [onChangeType],
  );

  return <Tabs className={className} tabs={typeTabs} currentValue={value} onTabChange={onTabChangeHandler} />;
});
