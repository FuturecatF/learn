import { useEffect } from 'react';
import { UseInfinityScrollProps } from './types';

export const useInfinityScroll = ({ callback, triggerRef, wrapperRef }: UseInfinityScrollProps) => {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const wrapperElement = wrapperRef?.current || null;
    const triggerElement = triggerRef.current;
    if (callback) {
      const options = {
        root: wrapperElement,
        rootMargin: '0px',
        threshold: 1.0,
      };

      observer = new IntersectionObserver(([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      observer.observe(triggerRef.current);
    }
    return () => {
      if (observer) {
        observer.unobserve(triggerElement);
      }
    };
  }, [wrapperRef, triggerRef, callback]);
};
