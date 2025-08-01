import { flatConfig as eslintPluginNextConfigs } from '@next/eslint-plugin-next';

import type { Configurator } from '@praha/eslint-config-definer';
import type { Linter } from 'eslint';

export const nextConfigurator: Configurator = () => {
  return [
    eslintPluginNextConfigs.coreWebVitals as Linter.Config,
  ];
};
