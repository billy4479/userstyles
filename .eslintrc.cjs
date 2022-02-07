module.exports = {
  root: true,
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  ignorePatterns: ['node_modules'],
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    'prettier/prettier': 'warn',
    'no-plusplus': 0,
    'no-console': 'off',
    'func-names': 'off',
  },
};
