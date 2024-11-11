import type { Configurator } from '@praha/eslint-config-definer';

export const ignoreConfigurator: Configurator = () => {
  return [
    {
      ignores: [
        // Node modules
        '**/node_modules',
        '**/package-lock.json',
        '**/yarn.lock',
        '**/pnpm-lock.yaml',

        // Test directories
        '**/coverage',
        '**/__snapshots__',

        // Build directories
        '**/dist',
        '**/.next',
        '**/.vercel',

        // Cache directories
        '**/.swc',
        '**/.turbo',

        // AWS CDK
        '**/cdk.out',
        '**/cdk.context.json',
      ],
    },
  ];
};
