import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/config/theme/lib/classNames';

import { getUserAuthData } from '@/entities/User';
import { Button, ButtonTheme, HStack, Text, useAppDispatch } from '@/shared';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';

interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader = memo(
  function EditableProfileCardHeader({
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
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Card padding="24" max border="partial">
            <HStack
              maxWidth
              justify="between"
              className={classNames('', {}, [className])}
            >
              <Text title={t<string>('Профиль')} />
              {canEdit && (
                <div>
                  {readonly ? (
                    <Button
                      onClick={onEditHandler}
                      data-testid="EditableProfileCardHeader.EditButton"
                    >
                      {t('Редактировать')}
                    </Button>
                  ) : (
                    <HStack gap="8">
                      <Button
                        onClick={onCancelEditHandler}
                        data-testid="EditableProfileCardHeader.CancelButton"
                        color="error"
                      >
                        {t('Отменить')}
                      </Button>
                      <Button
                        onClick={onSaveEditHandler}
                        data-testid="EditableProfileCardHeader.SaveButton"
                        color="success"
                      >
                        {t('Сохранить')}
                      </Button>
                    </HStack>
                  )}
                </div>
              )}
            </HStack>
          </Card>
        }
        off={
          <HStack
            maxWidth
            justify="between"
            className={classNames('', {}, [className])}
          >
            <TextDeprecated title={t<string>('Профиль')} />
            {canEdit && (
              <div>
                {readonly ? (
                  <Button
                    theme={ButtonTheme.OUTLINE}
                    onClick={onEditHandler}
                    data-testid="EditableProfileCardHeader.EditButton"
                  >
                    {t('Редактировать')}
                  </Button>
                ) : (
                  <HStack gap="8">
                    <Button
                      theme={ButtonTheme.OUTLINE_RED}
                      onClick={onCancelEditHandler}
                      data-testid="EditableProfileCardHeader.CancelButton"
                    >
                      {t('Отменить')}
                    </Button>
                    <Button
                      theme={ButtonTheme.OUTLINE}
                      onClick={onSaveEditHandler}
                      data-testid="EditableProfileCardHeader.SaveButton"
                    >
                      {t('Сохранить')}
                    </Button>
                  </HStack>
                )}
              </div>
            )}
          </HStack>
        }
      />
    );
  },
);
