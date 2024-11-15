import { ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/provider/StoreProvider';

export interface ComponentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}
