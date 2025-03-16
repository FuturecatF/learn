import { memo, useCallback } from 'react';
import { classNames } from '@/shared/config/theme/lib/classNames';
import CopyIcon from '@/shared/assets/icons/copy-20-20.svg';
import CopyIconNew from '@/shared/assets/icons/copy.svg';
import cls from './Code.module.scss';
import { Button, ButtonTheme } from '../../redesigned/Button/Button';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo(function Code({ className, text }: CodeProps) {
  const onCopyHandler = useCallback(async () => {
    await navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <pre
          className={classNames(cls.codeRedesigned, {}, [className])}
        >
          <Icon
            clickable
            onClick={onCopyHandler}
            className={cls.copyBtn}
            Svg={CopyIconNew}
          />
          <code>{text}</code>
        </pre>
      }
      off={
        <pre className={classNames(cls.code, {}, [className])}>
          <Button
            onClick={onCopyHandler}
            className={cls.copyBtn}
            theme={ButtonTheme.CLEAR}
          >
            <CopyIcon className={cls.copyIcon} />
          </Button>
          <code>{text}</code>
        </pre>
      }
    />
  );
});
