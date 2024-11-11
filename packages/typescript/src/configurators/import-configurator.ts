import eslintPluginImportX from 'eslint-plugin-import-x';

import { files } from '../files';

import type { Configurator } from '@praha/eslint-config-definer';

export type ImportConfiguratorOptions = {
  tsconfigPath: string;
};

export const importConfigurator: Configurator<ImportConfiguratorOptions> = (options) => {
  return [
    {
      name: 'import-x/typescript',
      files,
      ...eslintPluginImportX.configs.typescript,
    },
    {
      name: 'praha/typescript/import/settings',
      files,
      settings: {
        'import-x/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx', '.cts', '.mts', '.js', '.mjs'],
        },
        'import-x/resolver': {
          typescript: {
            project: options.tsconfigPath,
          },
        },
      },
    },
  ];
};
