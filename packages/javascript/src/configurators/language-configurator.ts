import type { Configurator } from '@praha/eslint-config-definer';

export const languageConfigurator: Configurator = () => {
  return [
    {
      name: 'praha/javascript/language',
      languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          ecmaVersion: 'latest',
          sourceType: 'module',
        },
      },
    },
  ];
};
