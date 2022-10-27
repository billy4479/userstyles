module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  ignorePatterns: ['*.cjs', 'node_modules', 'build'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json'],
    ecmaVersion: 12,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  rules: {
    'prettier/prettier': 'warn',
    'no-plusplus': 0,
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/extensions': ['error', { ts: 'never' }],
  },
};
