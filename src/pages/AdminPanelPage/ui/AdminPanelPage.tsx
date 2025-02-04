import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/config/theme/lib/classNames';

import { Page } from '@/widgets';
import cls from './AdminPanelPage.module.scss';

interface AdminPanelPageProps {
  className?: string;
}

const AdminPanelPage = memo(function AdminPanelPage({ className }: AdminPanelPageProps) {
  const { t } = useTranslation();
  return (
    <Page data-testid={'AdminPanelPage'} className={classNames(cls.adminPanelPage, {}, [className])}>
      dasfsdfsd
    </Page>
  );
});

export default AdminPanelPage;
