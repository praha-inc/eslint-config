import pluginNext from '@next/eslint-plugin-next';

import type { Configurator } from '@praha/eslint-config-definer';
import type { ESLint, Linter } from 'eslint';

export const nextConfigurator: Configurator = () => {
  return [
    {
      name: 'next/core-web-vitals',
      plugins: {
        '@next/next': pluginNext as ESLint.Plugin,
      },
      rules: {
        ...pluginNext.configs['core-web-vitals'].rules as Linter.Config['rules'],
      },
    },
  ];
};
