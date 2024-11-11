import g from 'globals';

import type { Configurator } from '@praha/eslint-config-definer';

export const globalsConfigurator: Configurator = () => {
  return [
    {
      name: 'praha/javascript/globals',
      languageOptions: {
        globals: {
          ...g.browser,
          ...g.es2021,
          ...g.node,
          document: 'readonly',
          navigator: 'readonly',
          window: 'readonly',
        },
      },
    },
  ];
};
