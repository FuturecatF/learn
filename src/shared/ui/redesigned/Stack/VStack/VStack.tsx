import { memo } from 'react';
import { FlexProps } from '../Flex/types';
import { Flex } from '../Flex/Flex';
import { TestProps } from '@/shared/types/tests';

type VStackProps = Omit<FlexProps, 'direction'> & TestProps;
export const VStack = memo(function HStack({ children, align = 'start', ...props }: VStackProps) {
  return (
    <Flex direction="column" align={align} {...props}>
      {children}
    </Flex>
  );
});
