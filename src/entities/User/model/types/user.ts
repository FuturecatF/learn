import { USER_ROLES } from '../consts';

export type UserRoles = ValueOf<typeof USER_ROLES>;
export interface User {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRoles[];
}

export interface UserSchema {
  authData?: User;
  _inited: boolean;
}
