import {
  MutableRefObject, useCallback, useEffect, useRef, useState,
} from 'react';

interface UseModalProps {
  onClose?: () => void;
  isOpen?: boolean;
  animationDelay: number;
}

export const useModal = ({
  animationDelay, isOpen, onClose,
}: UseModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>() as MutableRefObject<ReturnType<typeof setTimeout>>;

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      timerRef.current = setTimeout(() => {
        setIsOpening(true);
      }, animationDelay);
    }
  }, [animationDelay, isOpen]);

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);

      timerRef.current = setTimeout(() => {
        onClose();
        setIsOpening(false);
        setIsClosing(false);
      }, animationDelay);
    }
  }, [animationDelay, onClose]);

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeHandler();
      }
    },
    [closeHandler],
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return {
    isClosing,
    isMounted,
    closeHandler,
    isOpening,
  };
};
