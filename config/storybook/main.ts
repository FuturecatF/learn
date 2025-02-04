import { StorybookConfig } from '@storybook/react-webpack5';
import webpack, { RuleSetRule, Configuration } from 'webpack';
import { BuildPaths } from '../build/types/config';
import path from 'path';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@.storybook/addon-links', '@.storybook/addon-essentials', '@.storybook/addon-interactions'],
  framework: '@storybook/react-webpack5',
  core: {
    builder: {
      name: '@storybook/builder-webpack5',
      options: {
        fsCache: true,
        lazyCompilation: true,
      },
    },
  },
  staticDirs: ['../../public'],
  webpackFinal: async (config: Configuration) => {
    const paths: BuildPaths = {
      build: '',
      html: '',
      entry: '',
      src: path.resolve(__dirname, '..', '..', 'src'),
      locales: path.resolve(__dirname, 'public', 'locales'),
      buildLocales: path.resolve(__dirname, 'build', 'locales'),
    };
    config.resolve!.modules!.push(paths.src);
    config.resolve!.extensions!.push('.ts', '.tsx');
    config.resolve!.alias = {
      ...config!.resolve!.alias,
      '@': paths.src,
    };
    // eslint-disable-next-line no-param-reassign
    // @ts-ignore
    config!.module!.rules = config.module!.rules!.map((rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return {
          ...rule,
          exclude: /\.svg$/i,
        };
      }
      return rule;
    });

    config!.module!.rules.push(buildSvgLoader());
    config!.plugins!.push(
      new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('https://testapi.ru'),
        __PROJECT__: JSON.stringify('.storybook'),
      }),
    );
    config!.module!.rules.push(buildCssLoader(true));

    return config;
  },
};

export default config;
