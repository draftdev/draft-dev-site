module.exports = {
  root: true,
  ignorePatterns: [
    '.next/',
    'node_modules/',
    'dist/',
    'next-env.d.ts',
    'global.d.ts',
    'scripts/',
  ],
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: ['next', 'plugin:@typescript-eslint/recommended'],
  rules: {
    '@next/next/no-img-element': 'off',
    'prefer-const': 'off',
  },
  overrides: [
    {
      files: [
        'src/app/**/page.tsx',
        'src/components/global/**/*.{ts,tsx}',
        'src/components/media/**/*.{ts,tsx}',
        'src/components/page-components/**/*.{ts,tsx}',
      ],
      rules: {
        'react/no-unescaped-entities': 'off',
      },
    },
  ],
}
