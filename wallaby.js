/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
module.exports = function (w) {
  return {
    files: ['src/**/*.json', 'src/**/*.ts', '!src/**/*.spec.ts'],

    tests: ['src/**/*.spec.ts'],

    setup: (wallaby) => {
      const mocha = wallaby.testFramework;

      const chai = require('chai');

      global.expect = require('chai').expect;
    },

    testFramework: 'mocha',

    env: {
      type: 'node',
      runner: 'node',
    },
  };
};
