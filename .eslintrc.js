module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    sourceType: 'module', // Allows for the use of imports
  },
  extends: [
    'eslint:recommended', // The set of rules which are recommended for all projects by the ESLint Team
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  env: {
    es2021: true, // Adds all ECMAScript 2021 globals and automatically sets the ecmaVersion parser option to 12
    node: true, // Enable Node.js global variables
  },
  rules: {},
};
