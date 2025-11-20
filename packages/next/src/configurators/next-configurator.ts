import next from '@next/eslint-plugin-next';

import type { Configurator } from '@praha/eslint-config-definer';

export const nextConfigurator: Configurator = () => {
  return [
    // eslint-disable-next-line import-x/no-named-as-default-member
    next.configs['core-web-vitals'],
  ];
};
