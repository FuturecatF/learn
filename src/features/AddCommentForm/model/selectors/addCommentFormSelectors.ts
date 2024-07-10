import { StateSchema } from '@/app/provider/StoreProvider';

export const addCommentFormText = (state: StateSchema) => state.addCommentForm?.text || '';
export const addCommentFormError = (state: StateSchema) => state.addCommentForm?.error;
