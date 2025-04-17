import eslintPluginImportX from 'eslint-plugin-import-x';

import { files } from '../files';

import type { Configurator } from '@praha/eslint-config-definer';
import type { Linter } from 'eslint';

export type ImportConfiguratorOptions = {
  tsconfigPath: string;
};

export const importConfigurator: Configurator<ImportConfiguratorOptions> = (options) => {
  return [
    {
      files,
      ...(eslintPluginImportX.flatConfigs.typescript as Linter.Config),
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
