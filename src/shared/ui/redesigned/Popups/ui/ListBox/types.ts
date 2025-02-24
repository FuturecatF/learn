import { ReactNode } from 'react';
import { DropdownDirection } from '@/shared/types/ui';

export interface ListBoxItems<T extends string> {
  value: T;
  content: ReactNode;
  disabled?: boolean;
}

export interface ListBoxProps<T extends string> {
  className?: string;
  items?: ListBoxItems<T>[];
  currentValue?: T;
  defaultValue?: T;
  onChange: (value: T) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label: string;
}
