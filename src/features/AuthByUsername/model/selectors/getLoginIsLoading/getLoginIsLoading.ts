import { StateSchema } from 'app/provider/StoreProvider';

export const getLoginIsLoading = (state: StateSchema) => state.login?.isLoading || false;
