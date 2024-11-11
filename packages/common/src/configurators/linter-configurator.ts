import type { Configurator } from '@praha/eslint-config-definer';

export const linterConfigurator: Configurator = () => {
  return [
    {
      name: 'praha/common/linter',
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
    },
  ];
};
