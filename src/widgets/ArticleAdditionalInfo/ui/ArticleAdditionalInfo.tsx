import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './ArticleAdditionalInfo.module.scss';
import { User } from '@/entities/User';

import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { HStack, VStack } from '@/shared';
import { classNames } from '@/shared/config/theme/lib/classNames';

interface ArticleAdditionalInfoProps {
  className?: string;
  author: User;
  createdAt: string;
  views: number;
  onEdit: () => void;
}

export const ArticleAdditionalInfo = memo(
  (props: ArticleAdditionalInfoProps) => {
    const { className, author, createdAt, views, onEdit } = props;
    const { t } = useTranslation();

    return (
      <VStack
        gap="32"
        className={classNames(cls.articleAdditionalInfo, {}, [className])}
      >
        <HStack gap="8">
          <Avatar src={author.avatar} size={32} />
          <Text text={author.username} bold />
          <Text text={createdAt} />
        </HStack>
        <Button onClick={onEdit}>{t('Редактировать')}</Button>
        <Text text={t<string>('{{count}} просмотров', { count: views })} />
      </VStack>
    );
  },
);
