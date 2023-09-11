module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true, // 추가
  },
  extends: 'xo',
  overrides: [
    {
      extends: [
        'xo-typescript',
        'plugin:react/jsx-runtime', // 추가
      ],
      files: [
        '*.ts',
        '*.tsx',
      ],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname, // 추가 (파일 경로를 제대로 잡기 위해서)
  },
  rules: {
    'import/no-unresolved': 'off', // 추가
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

    // 추가
    indent: ['error', 2],
    'no-trailing-spaces': 'error',
    curly: 'error',
    'brace-style': 'error',
    'no-multi-spaces': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'no-whitespace-before-property': 'error',
    'func-call-spacing': 'error',
    'space-before-blocks': 'error',
    'keyword-spacing': ['error', { before: true, after: true }],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'always-multiline'],
    'space-in-parens': ['error', 'never'],
    'block-spacing': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'key-spacing': ['error', { mode: 'strict' }],
    'arrow-spacing': ['error', { before: true, after: true }],
  },
};
