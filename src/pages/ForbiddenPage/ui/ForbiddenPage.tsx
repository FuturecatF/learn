import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/config/theme/lib/classNames';
import { Page } from '@/widgets';

interface ForbiddenPageProps {
  className?: string;
}

const ForbiddenPage = ({ className }: ForbiddenPageProps) => {
  const { t } = useTranslation();
  return (
    <Page data-testid={'ForbiddenPage'} className={classNames('', {}, [className])}>
      {t('У вас нет доступа к этой странице')}
    </Page>
  );
};

export default ForbiddenPage;
