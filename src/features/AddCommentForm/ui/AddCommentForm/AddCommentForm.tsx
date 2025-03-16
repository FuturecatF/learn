import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/config/theme/lib/classNames';
import {
  Button, HStack, Input as InputDeprecated, useAppDispatch,
} from '@/shared';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { addCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slice/addCommentFormSlice';
import cls from './AddCommentForm.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';
import { Input  } from '@/shared/ui/redesigned/Input';
import { ToggleFeatures } from '@/shared/lib/features';

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const AddCommentForm = memo(function AddCommentForm({
  className,
  onSendComment,
}: AddCommentFormProps) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const text = useSelector(addCommentFormText);

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch],
  );

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Card padding="24" border="partial" max>
            <HStack
              data-testid="AddCommentForm"
              justify="between"
              maxWidth
              gap="16"
              className={classNames(
                cls.AddCommentFormRedesigned,
                {},
                [className],
              )}
            >
              <Input
                className={cls.input}
                placeholder={t<string>('Введите текст комментария')}
                value={text}
                data-testid="AddCommentForm.Input"
                onChange={onCommentTextChange}
              />
              <Button
                data-testid="AddCommentForm.Button"
                onClick={onSendHandler}
              >
                {t('Отправить')}
              </Button>
            </HStack>
          </Card>
        }
        off={
          <HStack
            data-testid="AddCommentForm"
            justify="between"
            maxWidth
            className={classNames(cls.AddCommentForm, {}, [
              className,
            ])}
          >
            <InputDeprecated
              className={cls.input}
              placeholder={t<string>('Введите текст комментария')}
              value={text}
              data-testid="AddCommentForm.Input"
              onChange={onCommentTextChange}
            />
            <Button
              data-testid="AddCommentForm.Button"
              theme={'outline'}
              onClick={onSendHandler}
            >
              {t('Отправить')}
            </Button>
          </HStack>
        }
      />
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
