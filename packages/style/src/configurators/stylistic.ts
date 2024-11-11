import eslintPluginStylistic from '@stylistic/eslint-plugin';

import type { Configurator } from '@praha/eslint-config-definer';

export const stylistic: Configurator = () => {
  return [
    {
      name: 'stylistic/recommended',
      ...eslintPluginStylistic.configs.customize({
        flat: true,
        indent: 2,
        quotes: 'single',
        semi: true,
        jsx: true,
        arrowParens: true,
        braceStyle: '1tbs',
        blockSpacing: true,
        quoteProps: 'consistent-as-needed',
        commaDangle: 'always-multiline',
      }),
    },
    {
      name: 'praha/stylistic/rules',
      rules: {
        '@stylistic/jsx-one-expression-per-line': ['error', { allow: 'single-line' }],
        '@stylistic/multiline-ternary': 'off',
      },
    },
  ];
};
