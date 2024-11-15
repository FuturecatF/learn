import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import {
  Text, TextVariant, useAppDispatch, useInitialEffect, VStack,
} from '@/shared';
import { classNames } from '@/shared/config/theme/lib/classNames';
import { ProfileCard } from '@/entities/Profile';

import { CurrencyType } from '@/entities/Currency';
import { CountryType } from '@/entities/Country';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { VALIDATE_PROFILE_ERROR } from '../../model/consts';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';

import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidationErrors } from '../../model/selectors/getProfileValidationErrors/getProfileValidationErrors';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';

interface EditableProfileCardProps {
  className?: string;
  id?: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { className, id } = props;
  const { t } = useTranslation('profile');
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

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

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
    <DynamicModuleLoader reducers={reducers}>
      <VStack gap={'16'} className={classNames('', {}, [className])} maxWidth>
        <EditableProfileCardHeader />
        {validationErrors?.length
          && validationErrors.map((error) => (
            <Text
              data-testid={'EditableProfileCard.Error'}
              variant={TextVariant.ERROR}
              key={error}
              text={validateErrorTranslates[error]}
            />
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
      </VStack>
    </DynamicModuleLoader>
  );
});
