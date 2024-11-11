// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import eslintPluginTestingLibrary from 'eslint-plugin-testing-library';

import { files } from '../files';

import type { Configurator } from '@praha/eslint-config-definer';
import type { ESLint, Linter } from 'eslint';

export const testingLibraryConfigurator: Configurator = () => {
  return [
    {
      name: 'testing-library/recommended',
      files,
      plugins: {
        'testing-library': eslintPluginTestingLibrary as ESLint.Plugin,
      },
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      rules: eslintPluginTestingLibrary.configs.recommended.rules as Linter.RulesRecord,
    },
  ];
};
