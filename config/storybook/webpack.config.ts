import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

export default ({ config }: { config: webpack.Configuration }) => {
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
};
