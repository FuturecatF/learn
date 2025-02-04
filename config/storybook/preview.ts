import { Preview } from '@storybook/react';
import { StoreDecorator } from '../../src/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { TranslateDecorator } from '../../src/shared/config/storybook/TranslateDecorator/TranslateDecorator';

const preview: Preview = {
  decorators: [RouterDecorator, ThemeDecorator, StoreDecorator({}), TranslateDecorator],

  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  tags: ['autodocs']
};

export default preview;
