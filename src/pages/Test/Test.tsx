import { classNames } from 'shared/config/theme/lib/classNames';

import cls from './Test.module.scss';

interface TestProps {
  className?: string;
}

export const Test = ({ className }: TestProps) => <div className={classNames(cls.test, {}, [className])} />;
