import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

const MainPage = () => {
  const { t } = useTranslation();
  return <Page>{t<string>('mainPage.title')}</Page>;
};

export default MainPage;
