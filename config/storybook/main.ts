import { StorybookConfig } from '@storybook/react-webpack5';
import webpack, { RuleSetRule, Configuration } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

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
    config!.module!.rules.push({
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          presets: [['@babel/preset-env', { targets: 'defaults' }]],
        },
      },
    });

    config!.module!.rules.push({
      test: /\.s[ac]ss$/i,
      exclude: /node_modules/,
      use: [
        // Creates `style` nodes from JS strings
        'style-loader',
        // Translates CSS into CommonJS
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: (resPath: string) => Boolean(resPath.includes('.module.')),
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            },
          },
        },
        // Compiles Sass to CSS
        'sass-loader',
      ],
    });

    return config;
  },
};

export default config;
