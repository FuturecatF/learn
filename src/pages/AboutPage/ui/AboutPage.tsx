import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();
  return <div>{t<string>('aboutPage.title')}</div>;
};

export default AboutPage;
