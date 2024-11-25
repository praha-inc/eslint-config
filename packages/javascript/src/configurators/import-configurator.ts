import eslintPluginImportX from 'eslint-plugin-import-x';
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports';

import type { Configurator } from '@praha/eslint-config-definer';
import type { Linter } from 'eslint';

export const importConfigurator: Configurator = () => {
  return [
    eslintPluginImportX.flatConfigs.recommended as Linter.Config,
    {
      name: 'unused-imports/setup',
      plugins: {
        'unused-imports': eslintPluginUnusedImports,
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
