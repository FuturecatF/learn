import { ReactNode } from 'react';
import { DropdownDirection } from 'shared/types/ui';

export interface DropdownItems {
  disabled?: boolean;
  content: ReactNode;
  onClick?: () => void;
  href?: string;
}

export interface DropDownProps {
  className?: string;
  items: DropdownItems[];
  trigger: ReactNode;
  direction?: DropdownDirection;
}