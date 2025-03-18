# @praha/eslint-config-common

[![npm version](https://badge.fury.io/js/@praha%2Feslint-config-common.svg)](https://www.npmjs.com/package/@praha/eslint-config-common)
[![npm download](https://img.shields.io/npm/dm/@praha/eslint-config-common.svg)](https://www.npmjs.com/package/@praha/eslint-config-common)
[![license](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/praha-inc/eslint-config/blob/main/packages/common/LICENSE)
[![Github](https://img.shields.io/github/followers/praha-inc?label=Follow&logo=github&style=social)](https://github.com/orgs/praha-inc/followers)

This is a ESLint config commonly inherited by PrAha products.

Use this setting to ensure consistent code writing and maintain high code quality.

## 🚀 Installation

```shell
npm install -D eslint @praha/eslint-config-common @praha/eslint-config-definer
```

## 👏 Getting Started

Create a `eslint.config.js` file in the root directory of your project, and add `@praha/eslint-config-common`.

```js
import { common } from '@praha/eslint-config-common';
import { define } from '@praha/eslint-config-definer';

const config = define(
  common,
);

export default config();
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

Feel free to check [issues page](https://github.com/praha-inc/eslint-config/issues) if you want to contribute.

## 📝 License

Copyright © [PrAha, Inc.](https://www.praha-inc.com/)

This project is [```MIT```](https://github.com/praha-inc/eslint-config/blob/main/packages/common/LICENSE) licensed.
