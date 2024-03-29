import { ReactNode } from 'react';
import { DropdownDirection } from 'shared/types/ui';

export interface ListBoxItems {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

export interface ListBoxProps {
  className?: string;
  items?: ListBoxItems[];
  currentValue?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label: string;
}