import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/config/theme/lib/classNames';
import {
  Avatar, HStack, Input, Text, TextAlign, TextVariant, VStack,
} from '@/shared';
import { CurrencySelect, CurrencyType } from '@/entities/Currency';
import { CountrySelect, CountryType } from '@/entities/Country';
import { PageLoader } from '@/widgets/PageLoader/ui/PageLoader';
import { Profile } from '../../model/types/profile';

import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeFirstname?: (value: string) => void;
  onChangeLastname?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCurrency?: (currency: CurrencyType) => void;
  onChangeCountry?: (country: CountryType) => void;
}
export const ProfileCard = ({
  className,
  data,
  error,
  isLoading,
  onChangeFirstname,
  onChangeLastname,
  readonly,
  onChangeAge,
  onChangeCity,
  onChangeUsername,
  onChangeAvatar,
  onChangeCurrency,
  onChangeCountry,
}: ProfileCardProps) => {
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <HStack gap={'8'} maxWidth className={classNames(cls.profileCard, {}, [cls.loading, className])}>
        <PageLoader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack gap={'8'} maxWidth className={classNames(cls.profileCard, {}, [cls.error, className])}>
        <Text
          title={'Произошла ошибка при загрузке'}
          text={'Попробуйте обновить страницу'}
          variant={TextVariant.ERROR}
          align={TextAlign.CENTER}
        />
      </HStack>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <VStack gap={'8'} className={classNames(cls.profileCard, mods, [className])} maxWidth>
      {data?.avatar && (
        <HStack justify={'center'} maxWidth>
          <Avatar src={data?.avatar} alt={'avatar'} />
        </HStack>
      )}
      <Input
        onChange={onChangeFirstname}
        value={data?.first}
        placeholder={t<string>('Firstname')}
        className={cls.input}
        readonly={readonly}
        data-testid={'ProfileCard.firstname'}
      />
      <Input
        onChange={onChangeLastname}
        value={data?.lastname}
        placeholder={t<string>('Lastname')}
        className={cls.input}
        readonly={readonly}
        data-testid={'ProfileCard.lastname'}
      />
      <Input
        onChange={onChangeAge}
        value={data?.age}
        placeholder={t<string>('Age')}
        className={cls.input}
        readonly={readonly}
      />
      <Input
        onChange={onChangeCity}
        value={data?.city}
        placeholder={t<string>('City')}
        className={cls.input}
        readonly={readonly}
      />
      <Input
        onChange={onChangeUsername}
        value={data?.username}
        placeholder={t<string>('Username')}
        className={cls.input}
        readonly={readonly}
      />
      <Input
        onChange={onChangeAvatar}
        value={data?.avatar}
        placeholder={t<string>('Avatar')}
        className={cls.input}
        readonly={readonly}
      />
      <CurrencySelect className={cls.input} value={data?.currency} onChange={onChangeCurrency} readonly={readonly} />
      <CountrySelect className={cls.input} value={data?.country} onChange={onChangeCountry} readonly={readonly} />
    </VStack>
  );
};
