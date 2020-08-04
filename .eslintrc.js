const path = require('path');

{
  module.exports = {
    root: true,
    parserOptions: {
      // Allows for the parsing of modern ECMAScript features
      ecmaVersion: 2020,
      // Allows for the use of imports
      sourceType: 'module',
      ecmaFeatures: {
        // Allows for the parsing of JSX
        jsx: true,
      },
    },
    extends: [
      'plugin:react/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:prettier/recommended',
      'prettier/react',
    ],
    plugins: ['react-hooks', 'cypress', 'graphql'],
    env: {
      'browser': true,
      'cypress/globals': true,
    },
    rules: {
      'import/no-named-as-default': 'off',
      'import/no-unresolved': [
        'error',
        {
          ignore: ['@generated', '__generated__'],
        },
      ],
      'import/order': [
        'error',
        {
          'groups': [
            ['builtin', 'external'],
            'internal',
            ['sibling', 'parent', 'index'],
          ],
          // 'groups': ['builtin', 'external', 'internal', 'sibling', 'index'],
          'pathGroups': [
            {
              pattern: '@*/**',
              group: 'internal',
            },
          ],
          'alphabetize': {
            order: 'asc',
            caseInsensitive: true,
          },
          'newlines-between': 'always',
        },
      ],
      'react/jsx-sort-props': [
        1,
        {
          reservedFirst: true,
        },
      ],
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
    overrides: [
      {
        files: ['*.ts', '*.tsx'],
        parser: '@typescript-eslint/parser',
        extends: [
          'plugin:@typescript-eslint/eslint-recommended',
          'plugin:@typescript-eslint/recommended',
          'plugin:import/typescript',
          'prettier/@typescript-eslint',
        ],
        rules: {
          '@typescript-eslint/explicit-function-return-type': 'off',
          '@typescript-eslint/naming-convention': [
            'error',
            {
              selector: 'interface',
              format: ['StrictPascalCase'],
              prefix: ['I'],
            },
          ],
          '@typescript-eslint/no-non-null-assertion': 'off',
          '@typescript-eslint/no-use-before-define': [
            'error',
            {
              functions: false,
              classes: true,
              variables: true,
              typedefs: true,
            },
          ],
          '@typescript-eslint/explicit-module-boundary-types': 'off',
        },
      },
    ],
    settings: {
      'react': {
        // Tells eslint-plugin-react to automatically detect the version of React to use
        version: 'detect',
      },
      'import/resolver': {
        // find aliases in tsconfig.json
        typescript: {
          directory: 'tsconfig.json',
        },
      },
      'import/ignore': [
        // ignore linting node_modules for import-related rules
        'node_modules',
      ],
      'import/external-module-folders': [
        // ensure node_modules are viewed as external modules
        'node_modules',
      ],
    },
  };
}
