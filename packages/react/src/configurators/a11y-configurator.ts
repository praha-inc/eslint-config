// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';

import type { Configurator } from '@praha/eslint-config-definer';
import type { ESLint, Linter } from 'eslint';

export const a11yConfigurator: Configurator = () => {
  return [
    {
      name: 'jsx-a11y/recommended',
      plugins: {
        'jsx-a11y': eslintPluginJsxA11y as unknown as ESLint.Plugin,
      },
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      rules: eslintPluginJsxA11y.configs.recommended.rules as unknown as Linter.RulesRecord,
    },
  ];
};
