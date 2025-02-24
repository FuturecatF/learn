import { memo, MutableRefObject, ReactNode, UIEvent, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/config/theme/lib/classNames';

import { useInfinityScroll, useInitialEffect, useThrottle } from '@/shared';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  getScrollByPath,
  scrollRestoreActions,
} from '@/features/scrollRestore';
import { StateSchema } from '@/app/provider/StoreProvider';
import cls from './Page.module.scss';
import { TestProps } from '@/shared/types/tests';
import { toggleFeatures } from '@/shared/lib/features';

interface PageProps extends TestProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
  isLoading?: boolean;
}

export const PAGE_ID = 'PAGE_ID';

export const Page = memo(function Page({
  className,
  children,
  onScrollEnd,
  isLoading,
  ...props
}: PageProps) {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const location = useLocation();
  const scrollPosition = useSelector((state: StateSchema) =>
    getScrollByPath(state, location.pathname),
  );

  useInfinityScroll({
    triggerRef,
    wrapperRef: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => undefined,
      off: () => wrapperRef,
    }),
    callback: onScrollEnd,
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const scrollPageHandler = useThrottle((event: UIEvent<HTMLDivElement>) => {
    dispatch(
      scrollRestoreActions.setScrollPosition({
        path: location.pathname,
        position: event.currentTarget.scrollTop,
      }),
    );
  }, 2000);

  return (
    <main
      id={PAGE_ID}
      ref={wrapperRef}
      onScroll={scrollPageHandler}
      className={classNames(
        toggleFeatures({
          name: 'isAppRedesigned',
          on: () => cls.pageRedesigned,
          off: () => cls.page,
        }),
        {},
        [className],
      )}
      data-testid={props['data-testid']}
    >
      {children}
      {onScrollEnd && !isLoading && <div ref={triggerRef} />}
    </main>
  );
});
