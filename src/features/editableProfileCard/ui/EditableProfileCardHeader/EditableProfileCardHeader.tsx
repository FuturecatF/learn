import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/config/theme/lib/classNames';

import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { getProfileData } from 'features/editableProfileCard/model/selectors/getProfileData/getProfileData';
import {
  Button, ButtonTheme, HStack, Text, useAppDispatch,
} from 'shared';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import cls from './EditableProfileCardHeader.module.scss';

interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader = memo(function EditableProfileCardHeader({
  className,
}: EditableProfileCardHeaderProps) {
  const { t } = useTranslation('profile');
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;
  const dispatch = useAppDispatch();
  const readonly = useSelector(getProfileReadonly);

  const onEditHandler = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEditHandler = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSaveEditHandler = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <HStack justify={'between'} className={classNames(cls.editableProfileCardHeader, {}, [className])} maxWidth>
      <Text title={t<string>('profile')} />

      {canEdit && (
        <div>
          {readonly ? (
            <Button className={cls.editButton} theme={ButtonTheme.OUTLINE} onClick={onEditHandler}>
              {t('edit')}
            </Button>
          ) : (
            <HStack gap="8">
              <Button className={cls.editButton} theme={ButtonTheme.OUTLINE_RED} onClick={onCancelEditHandler}>
                {t('cancel')}
              </Button>
              <Button className={cls.saveButton} theme={ButtonTheme.OUTLINE} onClick={onSaveEditHandler}>
                {t('save')}
              </Button>
            </HStack>
          )}
        </div>
      )}
    </HStack>
  );
});
