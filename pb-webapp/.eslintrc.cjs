module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react-refresh'],
  overrides: [{
    files: ['.eslintrc.cjs', 'postcss.config.*', 'tailwind.config.*'],
    env: {
      node: true,
    },
  }],
  rules: {
    indent: ['warn', 2],
    quotes: ['warn', 'single'],
    semi: ['warn', 'always'],
    'react-refresh/only-export-components': 'warn',
    'max-len': ['warn', {
      'code': 100,
    }],
    'comma-dangle': ['warn', 'always-multiline'],
  },
};