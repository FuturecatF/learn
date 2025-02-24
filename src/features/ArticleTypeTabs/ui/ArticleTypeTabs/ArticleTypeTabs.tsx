import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { TabItem, Tabs as TabsDeprecated } from '@/shared';
import { ARTICLE_TYPES, ArticleTypes } from '@/entities/Article';
import { classNames } from '@/shared/config/theme/lib/classNames';
import { Tabs } from '@/shared/ui/redesigned/Tabs';
import { ToggleFeatures } from '@/shared/lib/features';

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleTypes;
  onChangeType: (type: ArticleTypes) => void;
}

export const ArticleTypeTabs = memo(function ArticleTypeTabs({
  className,
  value,
  onChangeType,
}: ArticleTypeTabsProps) {
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

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Tabs
          direction="column"
          tabs={typeTabs}
          value={value}
          onTabClick={onTabChangeHandler}
          className={classNames('', {}, [className])}
        />
      }
      off={
        <TabsDeprecated
          className={className}
          tabs={typeTabs}
          currentValue={value}
          onTabChange={onTabChangeHandler}
        />
      }
    />
  );
});
