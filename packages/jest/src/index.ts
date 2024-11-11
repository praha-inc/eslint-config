import { define } from '@praha/eslint-config-definer';

import { globalsConfigurator } from './configurators/globals-configurator';
import { jestConfigurator } from './configurators/jest-configurator';

export const jest = define([
  globalsConfigurator,
  jestConfigurator,
]);
