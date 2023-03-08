import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/config/theme/lib/classNames';

import { Button, ButtonTheme, Text } from 'shared';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}
export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation();
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
    <div className={classNames(cls.profilePageHeader, {}, [className])}>
      <Text title={t<string>('profile')} />
      {readonly ? (
        <Button className={cls.editButton} theme={ButtonTheme.OUTLINE} onClick={onEditHandler}>
          {t('edit')}
        </Button>
      ) : (
        <>
          <Button className={cls.editButton} theme={ButtonTheme.OUTLINE_RED} onClick={onCancelEditHandler}>
            {t('cancel')}
          </Button>
          <Button className={cls.saveButton} theme={ButtonTheme.OUTLINE} onClick={onSaveEditHandler}>
            {t('save')}
          </Button>
        </>
      )}
    </div>
  );
};
