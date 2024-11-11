// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import eslintPluginJestDom from 'eslint-plugin-jest-dom';

import { files } from '../files';

import type { Configurator } from '@praha/eslint-config-definer';
import type { Linter } from 'eslint';

export const jestDomConfigurator: Configurator = () => {
  return [
    {
      name: 'jest-dom/recommended',
      files,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      ...eslintPluginJestDom.configs['flat/recommended'] as Linter.FlatConfig,
    },
  ];
};
