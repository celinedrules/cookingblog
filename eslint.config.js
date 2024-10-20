import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  // Frontend (React) Configuration
  {
    files: ['src/**/*.{js,jsx}'],  // Assuming your React code is in the src folder
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,  // React runs in the browser
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react/prop-types': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  // Backend (Node.js) Configuration
  {
    files: ['server.js', 'backend/**/*.js'],  // Assuming your backend is in the root or a backend folder
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.node,  // Node.js environment
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      // Add any Node.js specific rules here
    },
  },
]