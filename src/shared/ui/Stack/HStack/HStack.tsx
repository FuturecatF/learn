import { memo } from 'react';
import { FlexProps } from 'shared/ui/Stack/Flex/types';
import { Flex } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;
export const HStack = memo(function HStack({ children, ...props }: HStackProps) {
  return (
    <Flex direction="row" {...props}>
      {children}
    </Flex>
  );
});
