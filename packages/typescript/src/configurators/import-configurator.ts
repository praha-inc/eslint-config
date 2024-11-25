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
      ...eslintPluginImportX.flatConfigs.typescript,
    },
    {
      name: 'praha/typescript/import/settings',
      files,
      settings: {
        'import-x/resolver': {
          typescript: {
            project: options.tsconfigPath,
          },
        },
      },
    },
  ];
};
