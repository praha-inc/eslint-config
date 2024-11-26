import eslintPluginJest from 'eslint-plugin-jest';

import { files } from '../files';

import type { Configurator } from '@praha/eslint-config-definer';

export const jestConfigurator: Configurator = () => {
  return [
    {
      name: 'jest/recommended',
      files,
      ...eslintPluginJest.configs['flat/recommended'],
    },
    {
      name: 'jest/style',
      files,
      ...eslintPluginJest.configs['flat/style'],
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
