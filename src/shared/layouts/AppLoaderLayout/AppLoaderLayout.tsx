import { memo } from 'react';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { MainLayout } from '../MainLayout';
import cls from './AppLoaderLayout.module.scss';
import { HStack, VStack } from '@/shared';

export const AppLoaderLayout = memo(() => (
  <MainLayout
    header={
      <HStack className={cls.header}>
        <Skeleton width={40} height={40} borderRadius="50%" />
      </HStack>
    }
    content={
      <VStack gap="16" style={{ height: '100%' }}>
        <Skeleton width="70%" height={32} borderRadius="16px" />
        <Skeleton width="40%" height={20} borderRadius="16px" />
        <Skeleton width="50%" height={20} borderRadius="16px" />
        <Skeleton width="30%" height={32} borderRadius="16px" />
        <Skeleton width="80%" height="40%" borderRadius="16px" />
        <Skeleton width="80%" height="40%" borderRadius="16px" />
      </VStack>
    }
    sidebar={<Skeleton borderRadius="32px" width={220} height="100%" />}
  />
));
