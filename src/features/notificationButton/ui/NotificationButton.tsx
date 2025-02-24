import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Button, ButtonTheme, Drawer, Icon, Popover } from '@/shared';
import { NotificationList } from '@/entities/Notification';
import NotificationIconDeprecated from '@/shared/assets/icons/notification-20-20.svg';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import cls from './NotificationButton.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups/ui/Popover/Popover';

export const NotificationButton = memo(function NotificationButton() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  const trigger = (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={<Icon Svg={NotificationIcon} onClick={onOpenDrawer} clickable />}
      off={
        <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
          <Icon Svg={NotificationIconDeprecated} />
        </Button>
      }
    />
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
        <ToggleFeatures
          feature={'isAppRedesigned'}
          on={
            <Popover trigger={trigger}>
              <NotificationList className={cls.notificationButton} />
            </Popover>
          }
          off={
            <PopoverDeprecated trigger={trigger}>
              <NotificationList className={cls.notificationButton} />
            </PopoverDeprecated>
          }
        />
      </BrowserView>
    </>
  );
});
