import eslintPluginTestingLibrary from 'eslint-plugin-testing-library';

import { files } from '../files';

import type { Configurator } from '@praha/eslint-config-definer';

export const testingLibraryConfigurator: Configurator = () => {
  return [
    {
      name: 'testing-library/recommended',
      files,
      ...eslintPluginTestingLibrary.configs['flat/react'],
    },
  ];
};
