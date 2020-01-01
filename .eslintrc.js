{
  module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
      // Allows for the parsing of modern ECMAScript features
      ecmaVersion: 2019,
      // Allows for the use of imports
      sourceType: 'module',
      ecmaFeatures: {
        // Allows for the parsing of JSX
        jsx: true,
      },
    },
    extends: [
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      'plugin:prettier/recommended',
      'prettier/@typescript-eslint',
      'prettier/react',
    ],
    plugins: ['react-hooks'],
    env: {
      browser: true,
    },
    rules: {
      'import/no-named-as-default': 'off',
      'import/order': [
        'error',
        {
          'newlines-between': 'ignore', // temp hack while trying to get aliases to get recognized as separate from external imports
          groups: [
            ['builtin', 'external'],
            'internal',
            ['sibling', 'parent', 'index'],
          ],
        },
      ],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/interface-name-prefix': [
        1,
        { prefixWithI: 'always' },
      ],
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-use-before-define': [
        'error',
        { functions: false, classes: true, variables: true, typedefs: true },
      ],
      'react/jsx-sort-props': [
        1,
        {
          reservedFirst: true,
        },
      ],
      'react/sort-comp': [
        2,
        {
          order: [
            'static-methods',
            'instance-variables',
            'lifecycle',
            'everything-else',
            'render',
          ],
        },
      ],
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
    settings: {
      react: {
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
