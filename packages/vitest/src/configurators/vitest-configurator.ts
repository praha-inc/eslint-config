import eslintPluginVitest from '@vitest/eslint-plugin';

import { files } from '../../../typescript/src/files';

import type { Configurator } from '@praha/eslint-config-definer';

export const vitestConfigurator: Configurator = () => {
  return [
    {
      ...eslintPluginVitest.configs.recommended,
      files,
    },
    {
      name: 'praha/vitest/settings',
      files,
      settings: {
        vitest: {
          typecheck: true,
        },
      },
    },
  ];
};
