import { memo, useCallback, useState } from 'react';
import {
  Button, ButtonTheme, Drawer, Icon, Popover,
} from 'shared';
import { NotificationList } from 'entities/Notification';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { BrowserView, MobileView } from 'react-device-detect';
import cls from './NotificationButton.module.scss';

export const NotificationButton = memo(function NotificationButton() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  const trigger = (
    <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
      <Icon Svg={NotificationIcon} inverted />
    </Button>
  );

  return (
    <>
      <MobileView>
        {trigger}
        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
          <NotificationList />
        </Drawer>
      </MobileView>
      <BrowserView>
        <Popover trigger={trigger}>
          <NotificationList className={cls.notificationButton} />
        </Popover>
      </BrowserView>
    </>
  );
});
