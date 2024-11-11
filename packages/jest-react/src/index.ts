import { define } from '@praha/eslint-config-definer';

import { jestDomConfigurator } from './configurators/jest-dom-configurator';
import { testingLibraryConfigurator } from './configurators/testing-library-configurator';

export const jestReact = define([
  jestDomConfigurator,
  testingLibraryConfigurator,
]);
