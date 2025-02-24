import React, { memo } from 'react';
import {
  Card as CardDeprecated,
  CARD_VARIANT,
} from '@/shared/ui/deprecated/Card/Card';
import { Text as TextDeprecated } from '@/shared';
import { Notification } from '../../model/types/notifications';
import cls from './NotificationItem.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';

interface NotificationItemProps {
  notification: Notification;
}

export const NotificationItem = memo(function NotificationItem({
  notification,
}: NotificationItemProps) {
  const content = (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={
        <Card className={cls.notificationItem}>
          <Text title={notification.title} text={notification.description} />
        </Card>
      }
      off={
        <CardDeprecated
          className={cls.notificationItem}
          variant={CARD_VARIANT.OUTLINED}
        >
          <TextDeprecated
            title={notification.title}
            text={notification.description}
          />
        </CardDeprecated>
      }
    />
  );

  if (notification.href) {
    return (
      <a
        className={cls.link}
        href={notification.href}
        target={'_blank'}
        rel="noreferrer"
      >
        {content}
      </a>
    );
  }

  return content;
});
