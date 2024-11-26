import eslintPluginJestDom from 'eslint-plugin-jest-dom';

import { files } from '../files';

import type { Configurator } from '@praha/eslint-config-definer';

export const jestDomConfigurator: Configurator = () => {
  return [
    {
      name: 'jest-dom/recommended',
      files,
      ...eslintPluginJestDom.configs['flat/recommended'],
    },
  ];
};
