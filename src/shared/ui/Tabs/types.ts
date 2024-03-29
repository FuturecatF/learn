import { ReactNode } from 'react';

export interface TabItem {
  value: string;
  content: ReactNode;
}

export interface TabsProps {
  className?: string;
  tabs: TabItem[];
  currentValue: string;
  onTabChange: (tab: TabItem) => void;
}