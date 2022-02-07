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

      var module = require('module').Module;
      var originalRequire = module.prototype.require;

      if (!originalRequire._replaced) {
        module.prototype.require = function (filePath) {
          // add tsconfig path mappings here...

          filePath = filePath.replace('@fixtures', 'src/fixtures');

          filePath = filePath.replace('@interfaces', 'src/interfaces');

          return originalRequire.call(this, filePath);
        };

        originalRequire._replaced = true;
      }
    },

    testFramework: 'mocha',

    env: {
      type: 'node',
      runner: 'node',
    },
  };
};
