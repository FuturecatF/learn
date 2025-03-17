import { memo } from 'react';

import cls from './ScrollToolbar.module.scss';
import { VStack } from '@/shared';
import { ScrollToTopButton } from '@/features/ScrollToTopButton';
import { classNames } from '@/shared/config/theme/lib/classNames';

interface ScrollToolbarProps {
  className?: string;
}

export const ScrollToolbar = memo((props: ScrollToolbarProps) => {
  const { className } = props;

  return (
    <VStack
      justify="center"
      align="center"
      maxWidth
      className={classNames(cls.scrollToolbar, {}, [className])}
    >
      <ScrollToTopButton />
    </VStack>
  );
});
