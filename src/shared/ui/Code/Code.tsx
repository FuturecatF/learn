import { memo, useCallback } from 'react';
import { classNames } from 'shared/config/theme/lib/classNames';
import CopyIcon from 'shared/assets/icons/copy-20-20.svg';
import cls from './Code.module.scss';
import { Button, ButtonTheme } from '../Button/Button';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo(function Code({ className, text }: CodeProps) {
  const onCopyHandler = useCallback(async () => {
    await navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <div className={cls.codeWrapper}>
      <Button className={cls.copyButton} theme={ButtonTheme.CLEAR} onClick={onCopyHandler}>
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <pre className={classNames(cls.code, {}, [className])}>
        <code>{text}</code>
      </pre>
    </div>
  );
});
