import React, { memo } from 'react';
import { Applink, Card, Text } from 'shared';
import { CARD_VARIANT } from 'shared/ui/Card/Card';
import { Notification } from '../../model/types/notifications';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
  notification: Notification;
}
export const NotificationItem = memo(function NotificationItem({ notification }: NotificationItemProps) {
  const content = (
    <Card className={cls.notificationItem} variant={CARD_VARIANT.OUTLINED}>
      <Text title={notification.title} text={notification.description} />
    </Card>
  );

  if (notification.href) {
    return (
      <a className={cls.link} href={notification.href} target={'_blank'} rel="noreferrer">
        {content}
      </a>
    );
  }

  return content;
});
