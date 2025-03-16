import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import {
  Button,
  ButtonSize,
  Drawer,
  HStack,
  Input as InputDeprecated,
  Modal,
  StarRating,
  Text,
  VStack,
} from '@/shared';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDepreacted } from '@/shared/ui/deprecated/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Card } from '@/shared/ui/redesigned/Card';

interface RatingProps {
  title?: string;
  feedBackTitle?: string;
  hasFeedBack?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedBack?: string) => void;
  rate?: number;
  className?: string;
}

export const Rating = memo(function Rating({
  title,
  feedBackTitle,
  hasFeedBack,
  onCancel,
  onAccept,
  rate = 0,
  className
}: RatingProps) {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedBack, setFeedBack] = useState('');

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
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <>
          <Text title={feedBackTitle} />
          <Input
            data-testid="RatingCard.Input"
            value={feedBack}
            onChange={setFeedBack}
            placeholder={t<string>('Ваш отзыв')}
          />
        </>
      }
      off={
        <>
          <TextDepreacted title={feedBackTitle} />
          <InputDeprecated
            data-testid="RatingCard.Input"
            value={feedBack}
            onChange={setFeedBack}
            placeholder={t<string>('Ваш отзыв')}
          />
        </>
      }
    />
  );

  const content = (
    <>
      <VStack align="center" gap="8" maxWidth>
        <ToggleFeatures
          feature="isAppRedesigned"
          on={
            <Text
              title={starsCount ? t<string>('Спасибо за оценку!') : title}
            />
          }
          off={
            <TextDepreacted
              title={starsCount ? t<string>('Спасибо за оценку!') : title}
            />
          }
        />
        <StarRating
          selectedStars={starsCount}
          size={40}
          onSelect={onSelectStars}
        />
      </VStack>
      <BrowserView>
        <Modal isOpen={isModalOpen} lazy>
          <VStack maxWidth gap="32">
            {modalContent}
            <ToggleFeatures
              feature="isAppRedesigned"
              on={
                <HStack maxWidth gap="16" justify="end">
                  <Button
                    data-testid="RatingCard.Close"
                    onClick={cancelHandler}
                  >
                    {t('Закрыть')}
                  </Button>
                  <Button data-testid="RatingCard.Send" onClick={acceptHandler}>
                    {t('Отправить')}
                  </Button>
                </HStack>
              }
              off={
                <HStack maxWidth gap="16" justify="end">
                  <Button
                    data-testid="RatingCard.Close"
                    onClick={acceptHandler}
                    theme={'outlineRed'}
                  >
                    {t('Закрыть')}
                  </Button>
                  <Button data-testid="RatingCard.Send" onClick={acceptHandler}>
                    {t('Отправить')}
                  </Button>
                </HStack>
              }
            />
          </VStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isModalOpen} lazy onClose={cancelHandler}>
          <VStack gap="32">
            {modalContent}
            <ToggleFeatures
              feature="isAppRedesigned"
              on={
                <Button fullWidth onClick={acceptHandler} size="size_l">
                  {t('Отправить')}
                </Button>
              }
              off={
                <Button fullWidth onClick={acceptHandler} size={ButtonSize.L}>
                  {t('Отправить')}
                </Button>
              }
            />
          </VStack>
        </Drawer>
      </MobileView>
    </>
  );

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card max border="partial" padding="24">
          {content}
        </Card>
      }
      off={
        <CardDeprecated className={className} max data-testid="RatingCard">
          {content}
        </CardDeprecated>
      }
    />
  );
});
