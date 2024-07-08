import { BuildOptions } from '../types/config';
import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';

interface BuildBabelLoaderProps extends BuildOptions {
  isTsx: boolean;
}
export function buildBabelLoader(options: BuildBabelLoaderProps) {
  const babelPlugins: any = [];

  if (options.isDev) {
    babelPlugins.push(
      [
        'i18next-extract',
        {
          nsSeparator: '~',
          locales: ['ru', 'en'],
          keyAsDefaultValue: true,
        },
      ],
      ['@babel/plugin-transform-typescript', { isTSX: options.isTsx }],
      '@babel/plugin-transform-runtime',
      options.isTsx && [babelRemovePropsPlugin(), { props: ['data-testid'] }],
      require.resolve('react-refresh/babel'),
    );
  }
  return {
    test: options.isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [['@babel/preset-env', { targets: 'defaults' }]],
        plugins: babelPlugins.filter(Boolean),
      },
    },
  };
}
