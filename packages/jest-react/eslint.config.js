import { common } from '../common/dist/esm/index.js';
import { define } from '../definer/dist/esm/index.js';
import { javascript } from '../javascript/dist/esm/index.js';
import { style } from '../style/dist/esm/index.js';
import { typescript } from '../typescript/dist/esm/index.js';

const config = define([
  common,
  javascript,
  typescript,
  style,
]);

export default config({
  tsconfigPath: './tsconfig.json',
});
