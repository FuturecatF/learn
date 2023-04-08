import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/config/theme/lib/classNames';
import {
  Button, HStack, Input, useAppDispatch,
} from 'shared';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { addCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';
import cls from './AddCommentForm.module.scss';

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};
interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const AddCommentForm = memo(function AddCommentForm({ className, onSendComment }: AddCommentFormProps) {
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
      <HStack justify={'between'} className={classNames(cls.addCommentForm, {}, [className])} maxWidth>
        <Input
          className={cls.input}
          placeholder={t<string>('addCommentText')}
          value={text}
          onChange={onCommentTextChange}
        />
        <Button onClick={onSendHandler}>{t('Send')}</Button>
      </HStack>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
