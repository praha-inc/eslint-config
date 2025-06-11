import eslint from '@eslint/js';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

import type { Configurator } from '@praha/eslint-config-definer';

export const javascriptConfigurator: Configurator = () => {
  return [
    {
      name: 'eslint/recommended',
      ...eslint.configs.recommended,
    },
    eslintPluginUnicorn.configs['flat/recommended'],
    {
      name: 'praha/javascript/rules',
      rules: {
        'func-style': ['error', 'expression'],
        'no-unused-vars': 'off',
        'prefer-arrow-callback': 'error',
        // Disable this rule because it does not support the less-than operator.
        // @see: https://github.com/sindresorhus/eslint-plugin-unicorn/issues/2009
        'unicorn/explicit-length-check': 'off',
        // Disable this rule because it may cause false positives.
        // @see: https://github.com/sindresorhus/eslint-plugin-unicorn/issues/1193
        'unicorn/no-array-callback-reference': 'off',
        // Allow the use of the Array.forEach method because of the preference for functional programming.
        'unicorn/no-array-for-each': 'off',
        // Allow the use of the Array.reduce method because of the preference for functional programming.
        'unicorn/no-array-reduce': 'off',
        // Allow null to be used because some libraries have different meanings for null and undefined.
        'unicorn/no-null': 'off',
        // Loosen some overly strict prevent abbreviation rules.
        'unicorn/prevent-abbreviations': ['error', {
          replacements: {
            // Allow the use of this abbreviation when defining the types of function arguments in JavaScript, as it is used extensively.
            args: false,
            // Allow the use of this abbreviation when retrieving environment variables in Node.js, as it is used extensively.
            env: false,
            // Allow the use of this abbreviation when a function is received as an argument, as it is used extensively.
            fn: false,
            // Allow the use of this abbreviation when defining the page parameters in Next.js, as it is used extensively.
            params: false,
            // Allow the use of this abbreviation when defining the types of component properties in React, as it is used extensively.
            props: false,
            // Allow the use of this abbreviation when retrieving DOM references in React, as it is used extensively.
            ref: false,
          },
        }],
      },
    },
  ];
};
