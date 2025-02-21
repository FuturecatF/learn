import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, Text, useAppDispatch } from '@/shared';
import { useJsonSettings, saveJsonSettings } from '@/entities/User';

export const ArticlePageGreeting = memo(function ArticlePageGreeting() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { isArticlesPageWasOpened } = useJsonSettings();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!isArticlesPageWasOpened) {
      setIsOpen(true);
      dispatch(saveJsonSettings({ isArticlesPageWasOpened: true }));
    }
  }, [isArticlesPageWasOpened]);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Text
        title={t<string>('Добро пожаловать на страницу статей')}
        text={t<string>(
          'Здесь вы можете искать и просматривать статьи на различные темы',
        )}
      />
    </Modal>
  );
});
