import { memo } from 'react';
import { FlexProps } from 'shared/ui/Stack/Flex/types';
import { Flex } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;
export const VStack = memo(function HStack({ children, align = 'start', ...props }: VStackProps) {
  return (
    <Flex direction="column" align={align} {...props}>
      {children}
    </Flex>
  );
});
