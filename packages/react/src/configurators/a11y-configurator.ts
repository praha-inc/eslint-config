// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';

import type { Configurator } from '@praha/eslint-config-definer';
import type { Linter } from 'eslint';

export const a11yConfigurator: Configurator = () => {
  return [
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    eslintPluginJsxA11y.flatConfigs.recommended as Linter.Config,
  ];
};
