const js = require('@eslint/js');
const cypress = require('eslint-plugin-cypress');

module.exports = [
  {
    ignores: ['node_modules', 'cypress/videos/**', 'cypress/screenshots/**', 'dist/**'],
  },
  js.configs.recommended,
  cypress.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        Cypress: 'readonly',
        cy: 'readonly',
        document: 'readonly',
        window: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-undef': 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      quotes: ['error', 'single', { avoidEscape: true }],
      semi: ['error', 'always'],
      'no-inline-comments': 'warn',
      'spaced-comment': ['error', 'always', { markers: ['/'] }],
      // Deixa recomendações do plugin do Cypress apenas como aviso para não travar o commit
      'cypress/unsafe-to-chain-command': 'warn',
    },
  },
];

