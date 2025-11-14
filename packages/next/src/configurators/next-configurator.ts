import { configs as nextConfigs } from '@next/eslint-plugin-next';

import type { Configurator } from '@praha/eslint-config-definer';

export const nextConfigurator: Configurator = () => {
  return [
    nextConfigs['core-web-vitals'],
  ];
};
