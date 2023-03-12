import {
  buildPlugins, buildLoaders, buildResolvers, buildDevServer,
} from '../../config/build';
import { BuildOptions } from './types/config';

export const buildWebpackConfig = (options: BuildOptions) => {
  const { paths, mode, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
      publicPath: '/',
    },
    plugins: buildPlugins(options),
    resolve: buildResolvers(options),
    module: {
      rules: buildLoaders(options),
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
};
