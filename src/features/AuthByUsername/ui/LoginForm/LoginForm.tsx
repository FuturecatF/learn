import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/config/theme/lib/classNames';
import {
  Button, ButtonTheme, Text, TextVariant,
} from 'shared';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}
export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    username, password, error, isLoading,
  } = useSelector(getLoginState);

  const onChangeUsernameHandler = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePasswordHandler = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const loginHandler = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Text title={t('loginForm.title')} />
      {error && <Text text={t('loginForm.error')} variant={TextVariant.ERROR} />}
      <Input
        className={cls.input}
        placeholder={t('loginForm.username')}
        value={username}
        onChange={onChangeUsernameHandler}
        autoFocus
      />
      <Input
        className={cls.input}
        placeholder={t('loginForm.password')}
        value={password}
        onChange={onChangePasswordHandler}
      />
      <Button className={cls.loginBtn} theme={ButtonTheme.OUTLINE} onClick={loginHandler} disabled={isLoading}>
        {t('signIn')}
      </Button>
    </div>
  );
});
