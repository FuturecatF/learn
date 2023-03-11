import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/config/theme/lib/classNames';

import cls from './Test.module.scss';

interface TestProps {
  className?: string;
}

export const Test = ({ className }: TestProps) => {
  const { t } = useTranslation();
  return <div className={classNames(cls.test, {}, [className])} />;
};
