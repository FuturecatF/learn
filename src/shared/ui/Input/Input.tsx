import {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  MutableRefObject,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import { classNames } from '@/shared/config/theme/lib/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  type?: string;
  placeholder?: string;
  autoFocus?: boolean;
  readonly?: boolean;
}
export const Input = memo(
  ({
    className, value, onChange, type = 'text', placeholder, autoFocus, readonly, ...otherProps
  }: InputProps) => {
    const ref = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;
    const [isFocused, setIsFocused] = useState(false);
    const [carriagePosition, setCarriagePosition] = useState(0);

    const isCarriageVisible = isFocused && !readonly;

    useEffect(() => {
      if (autoFocus) {
        setIsFocused(true);
        ref.current.focus();
      }
    }, [autoFocus]);

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event.target.value);
      setCarriagePosition(event.target.value.length);
    };

    const onBlur = () => {
      setIsFocused(false);
    };

    const onFocus = () => {
      setIsFocused(true);
    };

    const onSelect = (event: SyntheticEvent<HTMLInputElement, Event>) => {
      if (event.currentTarget.selectionStart) {
        setCarriagePosition(event.currentTarget.selectionStart);
      }
    };

    return (
      <div className={classNames(cls.inputWrapper, {}, [className])}>
        {placeholder && <div className={cls.placeholder}>{`${placeholder}>`}</div>}
        <div className={cls.carriageWrapper}>
          <input
            ref={ref}
            className={classNames(cls.input, { [cls.readonly]: readonly })}
            onBlur={onBlur}
            onFocus={onFocus}
            onSelect={onSelect}
            value={value}
            type={type}
            onChange={onChangeHandler}
            readOnly={readonly}
            {...otherProps}
          />
          {isCarriageVisible && <span className={cls.carriage} style={{ left: `${carriagePosition * 9}px` }} />}
        </div>
      </div>
    );
  },
);
