import eslintPluginImportX from 'eslint-plugin-import-x';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports';

import type { Configurator } from '@praha/eslint-config-definer';
import type { ESLint } from 'eslint';

export const importConfigurator: Configurator = () => {
  return [
    {
      name: 'import-x/recommended',
      plugins: {
        'import-x': eslintPluginImportX as unknown as ESLint.Plugin,
      },
      rules: eslintPluginImportX.configs.recommended.rules,
      languageOptions: {
        parserOptions: eslintPluginImportX.configs.recommended.parserOptions,
      },
    },
    {
      name: 'unused-imports/setup',
      plugins: {
        'unused-imports': eslintPluginUnusedImports as unknown as ESLint.Plugin,
      },
    },
    {
      name: 'praha/javascript/import/rules',
      rules: {
        'import-x/consistent-type-specifier-style': ['error', 'prefer-top-level'],
        'import-x/newline-after-import': ['error', {
          count: 1,
        }],
        'import-x/no-unresolved': 'off',
        'import-x/order': ['error', {
          'groups': ['builtin', 'external', 'internal', ['index', 'parent', 'sibling'], 'object', 'type'],
          'newlines-between': 'always',
          'pathGroupsExcludedImportTypes': ['builtin'],
          'alphabetize': { order: 'asc', caseInsensitive: true },
        }],
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': ['error', {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        }],
      },
    },
  ];
};
