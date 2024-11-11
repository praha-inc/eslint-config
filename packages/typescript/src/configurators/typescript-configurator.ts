import process from 'node:process';

import tseslint from 'typescript-eslint';

import { files } from '../files';

import type { Configurator } from '@praha/eslint-config-definer';
import type { Linter } from 'eslint';

export type TypescriptConfiguratorOptions = {
  tsconfigPath: string;
};

export const typescriptConfigurator: Configurator<TypescriptConfiguratorOptions> = (options) => {
  return [
    ...tseslint.configs.recommendedTypeChecked.map((config) => ({
      files,
      ...config,
    })) as Linter.FlatConfig[],
    {
      name: 'praha/typescript/parser',
      files,
      languageOptions: {
        parserOptions: {
          project: options.tsconfigPath,
          tsconfigRootDir: process.cwd(),
        },
      },
    },
    {
      name: 'praha/typescript/rules',
      files,
      rules: {
        '@typescript-eslint/consistent-type-imports': ['error', {
          prefer: 'type-imports',
        }],
        '@typescript-eslint/no-misused-promises': ['error', {
          checksVoidReturn: {
            attributes: false,
          },
        }],
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
    {
      name: 'praha/typescript/rules/test',
      files: [
        '**/*.test.*',
        '**/__tests__/**/*',
      ],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/prefer-ts-expect-error': 'off',
      },
    },
  ];
};
