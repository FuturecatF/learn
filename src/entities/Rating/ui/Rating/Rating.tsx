import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import {
  Button, ButtonTheme, Card, Drawer, HStack, Input, Modal, StarRating, Text, VStack,
} from '@/shared';
import cls from './Rating.module.scss';

interface RatingProps {
  title?: string;
  feedBackTitle?: string;
  hasFeedBack?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedBack?: string) => void;
  rate?: number;
}

export const Rating = memo(function Rating({
  title,
  feedBackTitle,
  hasFeedBack,
  onCancel,
  onAccept,
  rate = 0,
}: RatingProps) {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedBack, setFeedBack] = useState('');

  console.log('isModalOpen', isModalOpen);
  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount);
      if (hasFeedBack) {
        setIsModalOpen(true);
      } else {
        onAccept?.(selectedStarsCount);
      }
    },
    [hasFeedBack, onAccept],
  );

  const acceptHandler = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedBack);
  }, [feedBack, onAccept, starsCount]);

  const cancelHandler = useCallback(() => {
    console.log('sdfsdf');
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
    <VStack gap={'32'} maxWidth>
      <Text text={feedBackTitle} />
      <Input placeholder={t<string>('Ваш отзыв')} />
      <HStack gap={'16'} justify={'center'}>
        <Button theme={ButtonTheme.OUTLINE_RED}>
          {t('Закрыть')}
        </Button>
        <Button onClick={acceptHandler}>{t('Отправить')}</Button>
      </HStack>
    </VStack>
  );

  return (
    <Card className={cls.rating} max>
      <VStack align={'center'} gap={'8'}>
        <Text text={starsCount ? 'Спасибо за оценку' : title} />
        <StarRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
      </VStack>
      <MobileView>
        <Drawer isOpen={isModalOpen} onClose={cancelHandler} lazy>
          {modalContent}
        </Drawer>
      </MobileView>
      <BrowserView>
        <Modal isOpen={isModalOpen} lazy>
          {modalContent}
        </Modal>
      </BrowserView>
    </Card>
  );
});
