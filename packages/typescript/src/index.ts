import { define } from '@praha/eslint-config-definer';

import { importConfigurator } from './configurators/import-configurator';
import { jsonConfigurator } from './configurators/json-configurator';
import { typescriptConfigurator } from './configurators/typescript-configurator';

export const typescript = define([
  importConfigurator,
  jsonConfigurator,
  typescriptConfigurator,
]);
