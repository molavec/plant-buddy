module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  overrides: [
    {
      env: { node: true },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: { sourceType: 'script' }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint'
  ],
  ignorePatterns: [
    '**/dist/*.js',
    '**/coverage/*.js',
    '**/*.config.js',
  ],
  rules: {
    indent: ['warn', 2 ],
    'linebreak-style': ['warn', 'unix' ],
    quotes: ['warn', 'single' ],
    semi: ['warn', 'always' ]
  }
};
