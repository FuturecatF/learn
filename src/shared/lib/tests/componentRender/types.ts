import { ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/provider/StoreProvider';
import { ThemeType } from '@/shared/types/theme';

export interface ComponentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
  theme?: ThemeType;
}
