import { StateSchema } from '@/app/provider/StoreProvider';

export const getLoginPassword = (state: StateSchema) => state.login?.password || '';
