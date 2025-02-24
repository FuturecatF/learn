module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'i18next',
    'react-hooks',
    'futurecat-fsd-plugin',
    'unused-imports',
    '@typescript-eslint'
  ],
  rules: {
    indent: [2, 2],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'unused-imports/no-unused-imports': 'warn',
    // '@typescript-eslint/indent': [2, 2, { offsetTernaryExpressions: true }],
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-cycle': 'error',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/jsx-curly-brace-presence': 'off',
    'implicit-arrow-linebreak': 'off',
    'i18next/no-literal-string': [
      'warn',
      {
        markupOnly: true,
        ignoreAttribute: [
          'data-testid',
          'to',
          'target',
          'justify',
          'align',
          'direction',
          'gap',
          'as',
          'borderRadius',
        ],
      },
    ],
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
        ignoreStrings: true,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-param-reassign': 'off',
    // TODO next 2 rules
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'no-undef': 'off',
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'react/no-array-index-key': 'off',
    'futurecat-fsd-plugin/path-checker': [
      'error',
      {
        alias: '@',
        testFilesPatterns: ['**/*.story.*', '**/StoreDecorator.tsx'],
      },
    ],
    'futurecat-fsd-plugin/public-api-imports': [
      'warn',
      {
        alias: '@',
        testFilesPatterns: [
          '**/*.test.*',
          '**/*.story.*',
          '**/StoreDecorator.tsx',
        ],
      },
    ],
    'futurecat-fsd-plugin/layer-imports': [
      'warn',
      {
        alias: '@',
        ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
      },
    ],
    'react/jsx-max-props-per-line': ['error', { maximum: 3 }],
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
  ],
};
