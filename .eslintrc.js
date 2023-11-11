module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard',
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.js',
        '.cjs'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 2021, // Cambié 'latest' a 2021
    sourceType: 'module'
  },
  rules: {
    indent: ['error', 2],
    semi: 'error',
    quotes: ['error', 'single'],
    'no-unused-vars': 'error',
    'no-undef': 'off',
    'arrow-parens': ['error', 'always'],
    'no-new-error': 'off',
    'prefer-promise-reject-errors': 'off'
  },
  plugins: ['jest']
}
