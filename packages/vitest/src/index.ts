import { define } from '@praha/eslint-config-definer';

import { globalsConfigurator } from './configurators/globals-configurator';
import { vitestConfigurator } from './configurators/vitest-configurator';

export const vitest = define([
  globalsConfigurator,
  vitestConfigurator,
]);
