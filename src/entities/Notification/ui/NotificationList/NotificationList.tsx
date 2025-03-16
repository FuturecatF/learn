import React, { memo } from 'react';
import { Skeleton as SkeletonDeprecated, VStack } from '@/shared';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton'
import { classNames } from '@/shared/config/theme/lib/classNames';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { useGetNotificationsQuery } from '../../api/notificationApi';
import cls from './NotificationList.module.scss';
import { toggleFeatures } from '@/shared/lib/features';

interface NotificationListProps {
  className?: string;
}
export const NotificationList = memo(function NotificationList({ className }: NotificationListProps) {
  const { data, isLoading } = useGetNotificationsQuery(null, {
    pollingInterval: 5000,
  });
  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  });
  if (isLoading) {
    return (
      <VStack gap={'16'} className={classNames(cls.notificationList, {}, [className])}>
        <Skeleton width={'100%'} borderRadius="8px" height={'80px'} />
        <Skeleton width={'100%'} borderRadius="8px" height={'80px'} />
        <Skeleton width={'100%'} borderRadius="8px" height={'80px'} />
      </VStack>
    );
  }
  return (
    <VStack gap={'16'} className={classNames(cls.notificationList, {}, [className])}>
      {data?.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </VStack>
  );
});
