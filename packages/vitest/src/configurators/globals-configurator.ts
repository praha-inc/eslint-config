import g from 'globals';

import { files } from '../files';

import type { Configurator } from '@praha/eslint-config-definer';

export const globalsConfigurator: Configurator = () => {
  return [
    {
      name: 'praha/vitest/globals',
      files,
      languageOptions: {
        globals: {
          ...g.vitest,
        },
      },
    },
  ];
};
