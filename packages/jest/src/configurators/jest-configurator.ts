// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import eslintPluginJest from 'eslint-plugin-jest';

import { files } from '../files';

import type { Configurator } from '@praha/eslint-config-definer';
import type { Linter } from 'eslint';

export const jestConfigurator: Configurator = () => {
  return [
    {
      name: 'jest/recommended',
      files,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      ...eslintPluginJest.configs['flat/recommended'] as Linter.FlatConfig,
    },
    {
      name: 'jest/style',
      files,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      ...eslintPluginJest.configs['flat/style'] as Linter.FlatConfig,
    },
    {
      name: 'praha/jest/rules',
      files,
      rules: {
        '@typescript-eslint/unbound-method': 'off',
        'jest/unbound-method': 'error',
      },
    },
  ];
};
