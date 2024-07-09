import { memo } from 'react';
import {
  Button, ButtonTheme, Icon, Popover,
} from 'shared';
import { NotificationList } from 'entities/Notification';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import cls from './NotificationButton.module.scss';

export const NotificationButton = memo(function NotificationButton() {
  return (
    <Popover trigger={(
      <Button theme={ButtonTheme.CLEAR}>
        <Icon Svg={NotificationIcon} inverted />
      </Button>
    )}
    >
      <NotificationList className={cls.notificationButton} />
    </Popover>
  );
});
