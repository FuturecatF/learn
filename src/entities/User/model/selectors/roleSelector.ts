import { StateSchema } from 'app/provider/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';
import { USER_ROLES } from '../types/user';

export const getUserRoles = (state: StateSchema) => state.user.authData?.roles;

export const isUserAdmin = createSelector(
  getUserRoles,
  (roles) =>
    Boolean(
      roles?.includes(USER_ROLES.USER) && roles?.includes(USER_ROLES.MANAGER) && roles?.includes(USER_ROLES.ADMIN),
    ) || false,
);

export const isUserManager = createSelector(getUserRoles, (roles) =>
  Boolean((roles?.includes(USER_ROLES.USER) && roles?.includes(USER_ROLES.MANAGER)) || false));
