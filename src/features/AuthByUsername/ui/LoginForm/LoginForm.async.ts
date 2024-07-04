import { FC, lazy } from 'react';

import { LoginFormProps } from '../../model/types/loginSchema';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
  () =>
    new Promise((resolve) => {
      setTimeout(
        () =>
        // @ts-ignore

          resolve(import('./LoginForm')),
        2500,
      );
    }),
);
