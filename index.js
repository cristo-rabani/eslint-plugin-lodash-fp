'use strict';

module.exports = {
  rules: {
    'consistent-compose': require('./rules/consistent-compose'),
    'no-chain': require('./rules/no-chain'),
    'use-fp': require('./rules/use-fp')
  },
  configs: {
    recommended: {
      env: {
        es6: true
      },
      parserOptions: {
        ecmaVersion: 7,
        sourceType: 'module'
      },
      rules: {
        'lodash-fp/consistent-compose': 'off',
        'lodash-fp/no-chain': 'error',
        'lodash-fp/use-fp': 'error'
      }
    }
  }
};