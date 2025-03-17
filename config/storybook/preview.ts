import { Preview } from '@storybook/react';
import { Theme } from '../../src/shared/const/theme';
import { StoreDecorator } from '../../src/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { TranslateDecorator } from '../../src/shared/config/storybook/TranslateDecorator/TranslateDecorator';

import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import './main.css';

const preview: Preview = {
  decorators: [
    RouterDecorator,
    ThemeDecorator(Theme.DARK),
    StoreDecorator({}),
    TranslateDecorator,
  ],

  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  tags: ['autodocs'],
};

export default preview;
