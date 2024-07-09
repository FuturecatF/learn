import React, { memo } from 'react';
import { Skeleton, VStack } from 'shared';
import { classNames } from 'shared/config/theme/lib/classNames';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { useGetNotificationsQuery } from '../../api/notificationApi';
import cls from './NotificationList.module.scss';

interface NotificationListProps {
  className?: string;
}
export const NotificationList = memo(function NotificationList({ className }: NotificationListProps) {
  const { data, isLoading } = useGetNotificationsQuery(null, {
    pollingInterval: 5000,
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
