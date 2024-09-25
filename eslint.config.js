import globals from 'globals';
import pluginJs from '@eslint/js';
import daStyle from 'eslint-config-dicodingacademy';

export default [
  daStyle,
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];
