import { define } from '@praha/eslint-config-definer';

import { a11yConfigurator } from './configurators/a11y-configurator';
import { reactConfigurator } from './configurators/react-configurator';

export const react = define([
  a11yConfigurator,
  reactConfigurator,
]);
