import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared';
import { classNames } from 'shared/config/theme/lib/classNames';

import cls from './AdminPanelPage.module.scss';

interface AdminPanelPageProps {
  className?: string;
}

const AdminPanelPage = memo(function AdminPanelPage({ className }: AdminPanelPageProps) {
  const { t } = useTranslation();
  return <Page className={classNames(cls.adminPanelPage, {}, [className])}>dasfsdfsd</Page>;
});

export default AdminPanelPage;
