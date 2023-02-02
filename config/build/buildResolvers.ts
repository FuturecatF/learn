import path from 'path';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export const buildResolvers = (): webpack.ResolveOptions => {
	return {
		extensions: ['.tsx', '.ts', '.js'],
		alias: {
			root: 'src',
			src: path.resolve(__dirname, 'src'),
		},
	};
};
