import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';

export const buildLoaders = ({ isDev }: BuildOptions): webpack.RuleSetRule[] => {
  const babelPlugins: any = [];

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [['@babel/preset-env', { targets: 'defaults' }]],
        plugins: babelPlugins,
      },
    },
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const svgLoader = buildSvgLoader();

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const cssLoaders = buildCssLoader(isDev);

  if (isDev) {
    babelLoader.use.options.plugins.push([
      'i18next-extract',
      {
        nsSeparator: '~',
        locales: ['ru', 'en'],
        keyAsDefaultValue: true,
      },
    ]);
  }

  return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoaders];
};
