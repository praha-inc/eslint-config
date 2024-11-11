import { define } from '@praha/eslint-config-definer';

import { stylistic } from './configurators/stylistic';

export const style = define([
  stylistic,
]);
