import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/config/theme/lib/classNames';
import {
  Button, ButtonTheme, Text, Input as InputDeprecated, VStack,
} from '@/shared';
import { Input } from '@/shared/ui/redesigned/Input';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { LoginFormProps } from '../../model/types/loginSchema';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import cls from './LoginForm.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';

const initialReducers: ReducersList = {
  login: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);
  const forceUpdate = useForceUpdate();

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
      forceUpdate();
    }
  }, [dispatch, username, password, onSuccess]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <VStack
            gap="16"
            className={classNames(cls.LoginForm, {}, [className])}
          >
            <Text title={t<string>('Форма авторизации')} />
            {error && (
              <Text
                text={t<string>('Вы ввели неверный логин или пароль')}
                variant="error"
              />
            )}
            <Input
              autofocus
              type="text"
              className={cls.input}
              placeholder={t<string>('Введите username')}
              onChange={onChangeUsernameHandler}
              value={username}
            />
            <Input
              type="text"
              className={cls.input}
              placeholder={t<string>('Введите пароль')}
              onChange={onChangePasswordHandler}
              value={password}
            />
            <Button
              className={cls.loginBtn}
              onClick={loginHandler}
              disabled={isLoading}
            >
              {t('Войти')}
            </Button>
          </VStack>
        }
        off={
          <div className={classNames(cls.LoginForm, {}, [className])}>
            <TextDeprecated title={t<string>('Форма авторизации')} />
            {error && (
              <TextDeprecated
                text={t<string>('Вы ввели неверный логин или пароль')}
                variant={'error'}
              />
            )}
            <InputDeprecated
              autoFocus
              type="text"
              className={cls.input}
              placeholder={t<string>('Введите username')}
              onChange={onChangeUsernameHandler}
              value={username}
            />
            <InputDeprecated
              type="text"
              className={cls.input}
              placeholder={t<string>('Введите пароль')}
              onChange={onChangePasswordHandler}
              value={password}
            />
            <Button
              theme={ButtonTheme.OUTLINE}
              className={cls.loginBtn}
              onClick={loginHandler}
              disabled={isLoading}
            >
              {t('Войти')}
            </Button>
          </div>
        }
      />
    </DynamicModuleLoader>
  );
});

export default LoginForm;
