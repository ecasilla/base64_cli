'use strict';
var chalk = require('chalk');

module.exports = function (flags) {
  if (!flags.input) {
    console.log(chalk.bold.red("I need an input path"));
    process.exit(1);
  }
  if (!flags.output) {
    console.log(chalk.bold.red("I need an output path"));
    process.exit(1);
  }
};
