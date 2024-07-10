import { StateSchema } from '@/app/provider/StoreProvider';

export const getProfileValidationErrors = (state: StateSchema) => state.profile?.validateErrors;
