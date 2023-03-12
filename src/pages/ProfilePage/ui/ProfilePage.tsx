import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/config/theme/lib/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidationErrors,
  profileActions,
  ProfileCard,
  profileReducer,
} from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { CurrencyType } from 'entities/Currency/model/types/currency';
import { CountryType } from 'entities/Country';
import { Text, TextVariant } from 'shared';
import { VALIDATE_PROFILE_ERROR } from 'entities/Profile/model/services/validateProfileData/validateProfileData';
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
  const validationErrors = useSelector(getProfileValidationErrors);

  const validateErrorTranslates = {
    [VALIDATE_PROFILE_ERROR.SERVER_ERROR]: t('server error'),
    [VALIDATE_PROFILE_ERROR.NO_DATA]: t('No data'),
    [VALIDATE_PROFILE_ERROR.INCORRECT_COUNTRY]: t('Incorrect country'),
    [VALIDATE_PROFILE_ERROR.INCORRECT_USER_DATA]: t('Wrong user data'),
    [VALIDATE_PROFILE_ERROR.INCORRECT_AGE]: t('Wrong age'),
  };

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchProfileData());
    }
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
        {validationErrors?.length
          && validationErrors.map((error) => (
            <Text variant={TextVariant.ERROR} key={error} text={validateErrorTranslates[error]} />
          ))}
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
