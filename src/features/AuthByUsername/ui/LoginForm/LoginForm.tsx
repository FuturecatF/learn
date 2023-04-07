import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/config/theme/lib/classNames';
import {
  Button, ButtonTheme, Text, TextVariant,
} from 'shared';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';

import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import cls from './LoginForm.module.scss';

const initialReducers: ReducersList = {
  login: loginReducer,
};

export interface LoginFormProps {
  className?: string;
  onSuccess?: () => void;
}
const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

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

  const loginHandler = useCallback(async () => {
    const response = await dispatch(loginByUsername({ username, password }));
    if (response.meta.requestStatus === 'fulfilled') {
      onSuccess?.();
    }
  }, [dispatch, username, password, onSuccess]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(cls.loginForm, {}, [className])}>
        <Text title={t<string>('loginForm.title')} />
        {error && <Text text={t<string>('loginForm.error')} variant={TextVariant.ERROR} />}
        <Input
          className={cls.input}
          placeholder={t<string>('loginForm.username')}
          value={username}
          onChange={onChangeUsernameHandler}
          autoFocus
        />
        <Input
          className={cls.input}
          placeholder={t<string>('loginForm.password')}
          value={password}
          onChange={onChangePasswordHandler}
        />
        <Button className={cls.loginBtn} theme={ButtonTheme.OUTLINE} onClick={loginHandler} disabled={isLoading}>
          {t('signIn')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
