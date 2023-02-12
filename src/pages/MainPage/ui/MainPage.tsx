import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();
  return <div>{t<string>('mainPage.title')}</div>;
};

export default MainPage;
