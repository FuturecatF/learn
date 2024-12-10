import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets';
import { useCounterValue } from '@/entities/Counter';

const AboutPage = () => {
  const { t } = useTranslation();
  const value = useCounterValue;
  return (
    <Page>
      <>
        {t<string>('aboutPage.title')}
        {value}
      </>
    </Page>
  );
};

export default AboutPage;
