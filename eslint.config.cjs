const { FlatCompat } = require('@eslint/eslintrc');
const compat = new FlatCompat();
const { ESLint } = require('eslint');

module.exports = [
  // Ignora node_modules e dist
  {
    ignores: ['node_modules/', 'dist/'],
  },
  
  // Regras e configurações para arquivos TypeScript
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      prettier: require('eslint-plugin-prettier'),
    },
    rules: {
      'prettier/prettier': ['error', { endOfLine: 'lf' }], // Regras de Prettier, forçando 'lf' como quebra de linha
      '@typescript-eslint/no-unused-vars': 'warn', // Avisar sobre variáveis não utilizadas
      'no-console': 'off', // Desativa regra para console.log
      'linebreak-style': ['error', 'unix'], // Força estilo de quebra de linha Unix
    },
  },
  
  // Suporte ao Prettier e ESLint com compatibilidade
  ...compat.extends('plugin:@typescript-eslint/recommended'),
  ...compat.extends('plugin:prettier/recommended'),
];
