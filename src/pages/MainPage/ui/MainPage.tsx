import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { Rating } from '@/entities/Rating';

const MainPage = () => {
  const { t } = useTranslation();
  return (
    <Page>
      <Rating title={'Как вам статья?'} feedBackTitle={'Оставьте отзыв о статье'} hasFeedBack />
      {t<string>('mainPage.title')}
    </Page>
  );
};

export default MainPage;
