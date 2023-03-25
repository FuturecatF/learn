import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
import { Page } from 'shared';

const MainPage = () => {
  const { t } = useTranslation();
  return (
    <Page>
      {t<string>('mainPage.title')}
      <Counter />
    </Page>
  );
};

export default MainPage;
