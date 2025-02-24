import { memo } from 'react';
import { FlexProps } from '../Flex/types';
import { Flex } from '../Flex/Flex';
import { TestProps } from '@/shared/types/tests';

type HStackProps = Omit<FlexProps, 'direction'> & TestProps;
export const HStack = memo(function HStack({ children, ...props }: HStackProps) {
  return (
    <Flex direction="row" {...props}>
      {children}
    </Flex>
  );
});
