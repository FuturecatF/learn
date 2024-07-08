import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const { isDev } = options;

  const codeBabelLoader = buildBabelLoader({
    ...options,
    isTsx: false,
  });
  const tsxCodeBabelLoader = buildBabelLoader({
    ...options,
    isTsx: true,
  });
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

  return [fileLoader, svgLoader, codeBabelLoader, tsxCodeBabelLoader, cssLoaders];
};
