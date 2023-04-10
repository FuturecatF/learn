import { useTranslation } from 'react-i18next';
import { Page } from 'shared';

const MainPage = () => {
  const { t } = useTranslation();
  return <Page>{t<string>('mainPage.title')}</Page>;
};

export default MainPage;
