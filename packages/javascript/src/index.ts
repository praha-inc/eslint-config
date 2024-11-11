import { define } from '@praha/eslint-config-definer';

import { globalsConfigurator } from './configurators/globals-configurator';
import { importConfigurator } from './configurators/import-configurator';
import { javascriptConfigurator } from './configurators/javascript-configurator';
import { languageConfigurator } from './configurators/language-configurator';

export const javascript = define([
  globalsConfigurator,
  importConfigurator,
  javascriptConfigurator,
  languageConfigurator,
]);
