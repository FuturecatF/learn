import { memo, ReactNode, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/config/theme/lib/classNames';

import { Card } from 'shared';
import { CARD_VARIANT } from 'shared/ui/Card/Card';
import cls from './Tabs.module.scss';

export interface TabItem {
  value: string;
  content: ReactNode;
}
interface TabsProps {
  className?: string;
  tabs: TabItem[];
  currentValue: string;
  onTabChange: (tab: TabItem) => void;
}

export const Tabs = memo(function Tabs({
  className, tabs, currentValue, onTabChange,
}: TabsProps) {
  const { t } = useTranslation();

  const changeTabHandler = useCallback((tab: TabItem) => () => {
    onTabChange(tab);
  }, [onTabChange]);

  return (
    <div className={classNames(cls.tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          key={tab.value}
          className={cls.tab}
          variant={tab.value === currentValue ? CARD_VARIANT.NORMAL : CARD_VARIANT.OUTLINED}
          onClick={changeTabHandler(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
});
