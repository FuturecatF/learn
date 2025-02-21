import { memo, ReactElement } from 'react';
import cls from './MainLayout.module.scss';
import { classNames } from '@/shared/config/theme/lib/classNames';

interface MainLayoutProps {
  className?: string;
  header: ReactElement;
  content: ReactElement;
  sidebar: ReactElement;
  toolbar?: ReactElement;
}

export const MainLayout = memo(
  ({ className, content, toolbar, header, sidebar }: MainLayoutProps) => (
    <div className={classNames(cls.mainLayout, {}, [className])}>
      <div className={cls.content}>{content}</div>
      <div className={cls.sidebar}>{sidebar}</div>
      <div className={cls.rightbar}>
        <div className={cls.header}>{header}</div>
        <div className={cls.toolbar}>{toolbar}</div>
      </div>
    </div>
  ),
);
