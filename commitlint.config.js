module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        'all',
        'ci',
        'component',
        'configs',
        'deps',
        'deps-dev',
        'docs',
        'examples',
        'icons',
        'pack',
        'release',
        'theme',
      ],
    ],
  },
};
