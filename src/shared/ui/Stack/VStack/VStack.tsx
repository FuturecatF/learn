import { memo } from 'react';
import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;
export const VStack = memo(function HStack({ children, align = 'start', ...props }: VStackProps) {
  return (
    <Flex direction="column" align={align} {...props}>
      {children}
    </Flex>
  );
});
