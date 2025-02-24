import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './ProfileCardDeprecated.module.scss';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { Text } from '@/shared/ui/redesigned/Text/Text';
import { TextAlign } from '@/shared/ui/deprecated/Text';
import { HStack, VStack } from '@/shared';
import { classNames, Mods } from '@/shared/config/theme/lib/classNames';
import { Loader } from '@/shared/ui/deprecated/Loader';

export const ProfileCardDeprecatedError = () => {
  const { t } = useTranslation();

  return (
    <HStack
      justify="center"
      maxWidth
      className={classNames(cls.ProfileCard, {}, [cls.error])}
    >
      <Text
        variant={'error'}
        title={t<string>('Произошла ошибка при загрузке профиля')}
        text={t<string>('Попробуйте обновить страницу')}
        align={TextAlign.CENTER}
      />
    </HStack>
  );
};

export const ProfileCardDeprecatedLoader = () => (
  <HStack
    justify="center"
    maxWidth
    className={classNames(cls.ProfileCard, { [cls.loading]: true })}
  >
    <Loader />
  </HStack>
);

export const ProfileCardDeprecated = memo((props: ProfileCardProps) => {
  const {
    className,
    data,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeUsername,
    onChangeCountry,
    onChangeCurrency,
  } = props;
  const { t } = useTranslation('profile');

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <VStack
      gap="8"
      maxWidth
      className={classNames(cls.ProfileCard, mods, [className])}
    >
      {data?.avatar && (
        <HStack justify="center" maxWidth className={cls.avatarWrapper}>
          <AvatarDeprecated src={data?.avatar} />
        </HStack>
      )}
      <InputDeprecated
        value={data?.first}
        placeholder={t<string>('Ваше имя')}
        className={cls.input}
        onChange={onChangeFirstname}
        readonly={readonly}
        data-testid="ProfileCard.firstname"
      />
      <InputDeprecated
        value={data?.lastname}
        placeholder={t<string>('Ваша фамилия')}
        className={cls.input}
        onChange={onChangeLastname}
        readonly={readonly}
        data-testid="ProfileCard.lastname"
      />
      <InputDeprecated
        value={data?.age}
        placeholder={t<string>('Ваш возраст')}
        className={cls.input}
        onChange={onChangeAge}
        readonly={readonly}
      />
      <InputDeprecated
        value={data?.city}
        placeholder={t<string>('Город')}
        className={cls.input}
        onChange={onChangeCity}
        readonly={readonly}
      />
      <InputDeprecated
        value={data?.username}
        placeholder={t<string>('Введите имя пользователя')}
        className={cls.input}
        onChange={onChangeUsername}
        readonly={readonly}
      />
      <InputDeprecated
        value={data?.avatar}
        placeholder={t<string>('Введите ссылку на аватар')}
        className={cls.input}
        onChange={onChangeAvatar}
        readonly={readonly}
      />
      <CurrencySelect
        className={cls.input}
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
      />
      {onChangeCountry && (
        <CountrySelect
          className={cls.input}
          value={data?.country}
          onChange={onChangeCountry}
          readonly={readonly}
        />
      )}
    </VStack>
  );
});
