export const USER_ROLES = {
  USER: 'USER',
  MANAGER: 'MANAGER',
  ADMIN: 'ADMIN',
  OWNER: 'OWNER',
} as const;

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
