import {
  memo, MutableRefObject, ReactNode, useRef,
} from 'react';
import { classNames } from 'shared/config/theme/lib/classNames';

import { useInfinityScroll } from 'shared';
import cls from './Page.module.scss';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = memo(function Page({ className, children, onScrollEnd }: PageProps) {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfinityScroll({ triggerRef, wrapperRef, callback: onScrollEnd });
  return (
    <section ref={wrapperRef} className={classNames(cls.page, {}, [className])}>
      {children}
      <div ref={triggerRef} />
    </section>
  );
});
