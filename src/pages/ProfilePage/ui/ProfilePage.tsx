import { classNames } from '@/shared/config/theme/lib/classNames';
import { Text, VStack } from '@/shared';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';

interface ProfilePageProps {
  className?: string;
}
const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation();
  const { userId } = useParams<{ userId: string }>();

  if (!userId) {
    return <Text text={'profile.noProfileFound'} />;
  }

  return (
    <Page className={classNames('', {}, [className])}>
      <VStack gap={'16'} maxWidth>
        <EditableProfileCard id={userId} />
      </VStack>
    </Page>
  );
};

export default ProfilePage;
