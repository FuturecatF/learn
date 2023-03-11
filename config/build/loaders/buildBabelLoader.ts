import { BuildOptions } from '../types/config';

export function buildBabelLoader(options: BuildOptions) {
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
      require.resolve('react-refresh/babel'),
    );
  }
  return {
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
}
