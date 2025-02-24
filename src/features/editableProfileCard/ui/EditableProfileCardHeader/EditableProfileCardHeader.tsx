import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/config/theme/lib/classNames';

import { getUserAuthData } from '@/entities/User';
import {
  Button, ButtonTheme, HStack, Text, useAppDispatch,
} from '@/shared';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
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
            <Button
              data-testid={'EditableProfileCardHeader.EditButton'}
              className={cls.editButton}
              theme={ButtonTheme.OUTLINE}
              onClick={onEditHandler}
            >
              {t('edit')}
            </Button>
          ) : (
            <HStack gap="8">
              <Button
                data-testid={'EditableProfileCardHeader.CancelButton'}
                className={cls.editButton}
                theme={ButtonTheme.OUTLINE_RED}
                onClick={onCancelEditHandler}
              >
                {t('cancel')}
              </Button>
              <Button
                data-testid={'EditableProfileCardHeader.SaveButton'}
                className={cls.saveButton}
                theme={ButtonTheme.OUTLINE}
                onClick={onSaveEditHandler}
              >
                {t('save')}
              </Button>
            </HStack>
          )}
        </div>
      )}
    </HStack>
  );
});
