import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Input } from '@/shared/ui/redesigned/Input';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';
import { HStack, VStack } from '@/shared';

export const ProfileCardRedesignedError = () => {
  const { t } = useTranslation();

  return (
    <HStack justify="center" maxWidth>
      <Text
        variant="error"
        title={t<string>('Произошла ошибка при загрузке профиля')}
        text={t<string>('Попробуйте обновить страницу')}
        align="center"
      />
    </HStack>
  );
};

export const ProfileCardRedesignedSkeleton = () => (
  <Card padding="24" max>
    <VStack gap="32">
      <HStack maxWidth justify="center">
        <Skeleton borderRadius="100%" width={128} height={128} />
      </HStack>
      <HStack gap="32" maxWidth>
        <VStack gap="16" maxWidth>
          <Skeleton width="100%" height={38} />
          <Skeleton width="100%" height={38} />
          <Skeleton width="100%" height={38} />
          <Skeleton width="100%" height={38} />
        </VStack>

        <VStack gap="16" maxWidth>
          <Skeleton width="100%" height={38} />
          <Skeleton width="100%" height={38} />
          <Skeleton width="100%" height={38} />
          <Skeleton width="100%" height={38} />
        </VStack>
      </HStack>
    </VStack>
  </Card>
);

export const ProfileCardRedesigned = memo((props: ProfileCardProps) => {
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
  console.log('data', data)
  return (
    <Card padding="24" border="partial" max
      className={className}>
      <VStack gap="32">
        {data?.avatar && (
          <HStack justify="center" maxWidth>
            <Avatar size={128} src={data?.avatar} />
          </HStack>
        )}
        <HStack gap="24" maxWidth>
          <VStack gap="16" maxWidth>
            <Input
              value={data?.first}
              label={t<string>('Имя')}
              onChange={onChangeFirstname}
              readonly={readonly}
              data-testid="ProfileCard.firstname"
            />
            <Input
              value={data?.lastname}
              label={t<string>('Фамилия')}
              onChange={onChangeLastname}
              readonly={readonly}
              data-testid="ProfileCard.lastname"
            />
            <Input
              value={data?.age}
              label={t<string>('Возраст')}
              onChange={onChangeAge}
              readonly={readonly}
            />
            <Input
              value={data?.city}
              label={t<string>('Город')}
              onChange={onChangeCity}
              readonly={readonly}
            />
          </VStack>
          <VStack gap="16" maxWidth>
            <Input
              value={data?.username}
              label={t<string>('Имя пользователя')}
              onChange={onChangeUsername}
              readonly={readonly}
            />
            <Input
              value={data?.avatar}
              label={t<string>('Cсылка на аватар')}
              onChange={onChangeAvatar}
              readonly={readonly}
            />
            <CurrencySelect
              value={data?.currency}
              onChange={onChangeCurrency}
              readonly={readonly}
            />
            {onChangeCountry && (
              <CountrySelect
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
              />
            )}
          </VStack>
        </HStack>
      </VStack>
    </Card>
  );
});
