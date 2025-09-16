import next from 'eslint-config-next'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default [
  { ignores: ['**/.next/**', '**/node_modules/**', '**/dist/**'] },

  next,

  ...tseslint.configs.recommended,

  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      '@next/next/no-img-element': 'off',
      'prefer-const': 'off',
    },
  },
]
