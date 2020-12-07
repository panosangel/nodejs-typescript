module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'eslint:recommended', 'prettier'],
  env: {
    'es6': true,
    'node': true,
  },
  rules: {
    'prettier/prettier': 'error'
  },
  plugins: [
    'prettier'
  ]
}
