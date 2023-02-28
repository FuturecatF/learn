import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/config/theme/lib/classNames';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import {
  Button, ButtonTheme, Input, Text,
} from 'shared';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}
export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t<string>('profile')} />
        <Button className={cls.editButton} theme={ButtonTheme.OUTLINE}>{t('edit')}</Button>
      </div>
      <div className={cls.data}>
        <Input value={data?.first} placeholder={t<string>('firstname')} className={cls.input} />
        <Input value={data?.lastname} placeholder={t<string>('lastname')} className={cls.input} />
      </div>
    </div>
  );
};
