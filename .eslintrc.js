module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['simple-import-sort'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    // 'plugin:prettier/recommended', // Make sure this is always the last element in the array.
  ],
  rules: {
    // -------- React ---------------
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-max-props-per-line': [
      'error',
      {
        maximum: 1,
        when: 'multiline',
      },
    ],
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens',
        assignment: 'parens',
        return: 'parens',
        arrow: 'parens',
        condition: 'ignore',
        logical: 'ignore',
        prop: 'ignore',
      },
    ],
    // --------- JSX ----------------
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'max-len': [
      'error',
      {
        // ignoreComments: true,
        code: 120,
        tabWidth: 2,
      },
    ],
    'comma-dangle': ['error', 'always-multiline'],
    'array-element-newline': ['error', 'consistent'],
    'simple-import-sort/imports': 'error',
    // 'prettier/prettier': [
    //   'error',
    //   {
    //     singleQuote: true,
    //     endOfLine: 'auto',
    //     semi: true,
    //     parser: 'flow',
    //     // printWidth: 120,
    //   },
    //   { usePrettierrc: false },
    // ],
  },
};
