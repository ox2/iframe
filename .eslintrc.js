module.exports = {
  // So parent files don't get applied
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended','plugin:react/all', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    }
  },
  plugins: [
    'babel',
    'react',
    'jest',
    'import',
  ],
  rules: {
    'arrow-parens': 'off',
    'consistent-this': ['error', 'self'],
    'consistent-return': 'off', // Wishlist, one day
    'dot-notation': 'error',
    'eqeqeq': ['error', 'smart'],
    'indent': ['off', 2, {SwitchCase: 1}],
    'id-blacklist': ['error', 'e'],
    'max-len': 'off',
    'new-cap': ['off', {capIsNew: true, newIsCap: true}], // Wishlist, one day
    'no-unused-expressions': 'off', // do expressions in es7 https://github.com/babel/eslint-plugin-babel/issues/13
    'no-unused-vars': 'error',
    'no-shadow': 'off', // Wishlist, one day
    'no-undef': 'error',
    'no-empty-pattern': 'error',
    'no-dupe-keys': 'error',
    'no-dupe-args': 'error',
    'no-duplicate-case': 'error',
    'no-cond-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'error',
    'no-unreachable': 'error',
    'no-var': 'error',
    'one-var': ['error', 'never'],
    'operator-linebreak': ['off', 'after'],
    'prefer-arrow-callback': 'off', // Wishlist, one day
    'prefer-const': 'error',
    'prefer-template': 'error',
    'spaced-comment': 'error',
    'yoda': 'error',
    'babel/object-curly-spacing': 'off',
    'babel/arrow-parens': 'off',
    'no-await-in-loop': 'error',
    'strict': 'off',
    'no-case-declarations': 'off',
    'import/extensions': 'error',
    'react/forbid-component-props': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-filename-extension': 'off',
    'react/jsx-no-literals': 'off',
    'react/no-children-prop': 'off',
    'react/no-set-state': 'off',
  },
};
