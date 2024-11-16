import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from '../../src/shared/config/storybook/StoreDecorator/StoreDecorator';
import { TranslateDecorator } from '../../src/shared/config/storybook/TranslateDecorator/TranslateDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { Theme } from '../../src/shared/const/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    default: 'light',
    list: [
      {
        name: 'light',
        class: Theme.LIGHT,
        color: '#fff',
      },
      {
        name: 'dark',
        class: Theme.DARK,
        color: '#070707',
      },
      {
        name: 'custom',
        class: Theme.MONO,
        color: '#620e0e',
      },
    ],
  },
};

addDecorator(SuspenseDecorator);
addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(StoreDecorator({ user: { authData: { username: 'user', password: '123' } } }));
addDecorator(RouterDecorator);
addDecorator(TranslateDecorator);
