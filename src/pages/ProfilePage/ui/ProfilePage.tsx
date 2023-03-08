import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/config/theme/lib/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  profileActions,
  ProfileCard,
  profileReducer,
} from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { CurrencyType } from 'entities/Currency/model/types/currency';
import { CountryType } from 'entities/Country';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}
const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const onChangeFirstnameHandler = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ first: value }));
    },
    [dispatch],
  );

  const onChangeLastnameHandler = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastname: value }));
    },
    [dispatch],
  );

  const onChangeAgeHandler = useCallback(
    (value?: string) => {
      if (/^\d*$/g.test(value || '')) {
        dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
      }
    },
    [dispatch],
  );

  const onChangeCityHandler = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value }));
    },
    [dispatch],
  );

  const onChangeUsernameHandler = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value }));
    },
    [dispatch],
  );

  const onChangeAvatarHandler = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value }));
    },
    [dispatch],
  );

  const onChangeCurrencyHandler = useCallback(
    (value?: CurrencyType) => {
      dispatch(profileActions.updateProfile({ currency: value }));
    },
    [dispatch],
  );

  const onChangeCountryHandler = useCallback(
    (value?: CountryType) => {
      dispatch(profileActions.updateProfile({ country: value }));
    },
    [dispatch],
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <ProfilePageHeader />
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          onChangeFirstname={onChangeFirstnameHandler}
          onChangeLastname={onChangeLastnameHandler}
          onChangeAge={onChangeAgeHandler}
          onChangeCity={onChangeCityHandler}
          onChangeUsername={onChangeUsernameHandler}
          onChangeAvatar={onChangeAvatarHandler}
          onChangeCurrency={onChangeCurrencyHandler}
          onChangeCountry={onChangeCountryHandler}
          readonly={readonly}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
