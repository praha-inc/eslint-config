# @praha/eslint-config-vitest

[![npm version](https://badge.fury.io/js/@praha%2Feslint-config-vitest.svg)](https://www.npmjs.com/package/@praha/eslint-config-vitest)
[![npm download](https://img.shields.io/npm/dm/@praha/eslint-config-vitest.svg)](https://www.npmjs.com/package/@praha/eslint-config-vitest)
[![license](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/praha-inc/eslint-config/blob/main/packages/vitest/LICENSE)
[![Github](https://img.shields.io/github/followers/praha-inc?label=Follow&logo=github&style=social)](https://github.com/orgs/praha-inc/followers)

This is a ESLint config commonly inherited by PrAha products.

Use this setting to ensure consistent code writing and maintain high code quality.

## 🚀 Installation

```shell
# Install peer dependencies.
npm install -D eslint @praha/eslint-config-common @praha/eslint-config-definer @praha/eslint-config-javascript

# Install this package.
npm install -D @praha/eslint-config-vitest

# (Recommended) If you want to use the style guide, install the following package.
# However, this is not necessary if you are using Prettier.
npm install -D @praha/eslint-config-style

# (Optional) If you are using TypeScript, install the following package.
npm install -D @praha/eslint-config-typescript
```

## 👏 Getting Started

Create a `eslint.config.js` file in the root directory of your project.

```js
import { common } from '@praha/eslint-config-common';
import { define } from '@praha/eslint-config-definer';
import { javascript } from '@praha/eslint-config-javascript';
import { typescript } from '@praha/eslint-config-typescript';
import { vitest } from '@praha/eslint-config-vitest';

const config = define([
  common,
  javascript,
  vitest,
  // If you are using TypeScript, add the following line.
  typescript,
]);

export default config({
  // If you are using TypeScript, add the following line.
  tsconfigPath: './tsconfig.json',
});
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

Feel free to check [issues page](https://github.com/praha-inc/eslint-config/issues) if you want to contribute.

## 📝 License

Copyright © [PrAha, Inc.](https://www.praha-inc.com/)

This project is [```MIT```](https://github.com/praha-inc/eslint-config/blob/main/packages/vitest/LICENSE) licensed.
