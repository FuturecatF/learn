import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/config/theme/lib/classNames';
import { Button } from 'shared';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}
export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const [username, setUsername] = useState('');

  const onChangeUsernameHandler = (value: string) => {
    setUsername(value);
  };

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Input
        className={cls.input}
        placeholder={t('loginForm.username')}
        value={username}
        onChange={onChangeUsernameHandler}
        autoFocus
      />
      <Input className={cls.input} placeholder={t('loginForm.password')} />
      <Button className={cls.loginBtn}>{t('signIn')}</Button>
    </div>
  );
};
