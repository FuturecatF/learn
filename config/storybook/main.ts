import { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@.storybook/addon-links', '@.storybook/addon-essentials', '@.storybook/addon-interactions'],
  framework: {
    name: '@.storybook/react',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  core: {
    builder: '@.storybook/builder-webpack5',
  },
  staticDirs: ['../../public'],

};
export default config;
