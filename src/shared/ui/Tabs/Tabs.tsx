import { memo, useCallback } from 'react';
import { classNames } from '@/shared/config/theme/lib/classNames';
import { Card, CARD_VARIANT } from '../Card/Card';
import { TabItem, TabsProps } from './types';
import cls from './Tabs.module.scss';

export const Tabs = memo(function Tabs({
  className, tabs, currentValue, onTabChange,
}: TabsProps) {
  const changeTabHandler = useCallback(
    (tab: TabItem) => () => {
      onTabChange(tab);
    },
    [onTabChange],
  );

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
