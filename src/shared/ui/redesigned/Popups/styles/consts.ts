import type { DropdownDirection } from '@/shared/types/ui';
import cls from './popup.module.scss';

export const mapDirectionClass: Record<DropdownDirection, string> = {
  'top left': cls.topLeft,
  'top right': cls.topRight,
  'bottom left': cls.bottomLeft,
  'bottom right': cls.bottomRight,
};
