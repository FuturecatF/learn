import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from '@/shared/ui/redesigned/Text';
import { Page } from '@/widgets';
import { VStack } from '@/shared';
import { UiDesignSwitcher } from '@/features/UiDesignSwitcher';

interface SettingsPageProps {
  className?: string;
}

const SettingsPage = memo((props: SettingsPageProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <Page>
      <VStack gap="16">
        <Text title={t<string>('Настройки пользователя')} />
        <UiDesignSwitcher />
      </VStack>
    </Page>
  );
});

export default SettingsPage;
