import { USER_ROLES } from '../consts';
import { FeatureFlags } from '@/shared/types/featureFlags';
import { JsonSettings } from './jsonSettings';

export type UserRoles = ValueOf<typeof USER_ROLES>;

export interface User {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRoles[];
  features?: FeatureFlags;
  jsonSettings?: JsonSettings;
}

export interface UserSchema {
  authData?: User;
  _inited: boolean;
}
