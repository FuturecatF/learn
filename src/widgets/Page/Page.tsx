import {
  memo, MutableRefObject, ReactNode, UIEvent, useRef,
} from 'react';
import { classNames } from 'shared/config/theme/lib/classNames';

import { useInfinityScroll, useInitialEffect, useThrottle } from 'shared';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getScrollByPath, scrollRestoreActions } from 'features/scrollRestore';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/provider/StoreProvider';
import cls from './Page.module.scss';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const PAGE_ID = 'PAGE_ID';

export const Page = memo(function Page({ className, children, onScrollEnd }: PageProps) {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const location = useLocation();
  const scrollPosition = useSelector((state: StateSchema) => getScrollByPath(state, location.pathname));

  useInfinityScroll({ triggerRef, wrapperRef, callback: onScrollEnd });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const scrollPageHandler = useThrottle((event: UIEvent<HTMLDivElement>) => {
    dispatch(
      scrollRestoreActions.setScrollPosition({ path: location.pathname, position: event.currentTarget.scrollTop }),
    );
  }, 2000);

  return (
    <main
      id={PAGE_ID}
      ref={wrapperRef}
      onScroll={scrollPageHandler}
      className={classNames(cls.page, {}, [className])}
    >
      {children}
      {onScrollEnd && <div ref={triggerRef} />}
    </main>
  );
});
