import {
	buildPlugins,
	buildLoaders,
	buildResolvers,
	buildDevServer,
} from '../../config/build';
import { BuildOptions } from '../build/types/config';

export const buildWebpackConfig = (options: BuildOptions) => {
	const { paths, mode, isDev } = options;
	return {
		mode: mode,
		entry: paths.entry,
		output: {
			publicPath: '/',
			filename: '[name].[contenthash].js',
			path: paths.build,
			clean: true,
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
