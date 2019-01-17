"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _commander = _interopRequireDefault(require("commander"));

_commander.default.command('watch').alias('w').description('Watch with BrowserSync').action(function (name, id) {
  console.log(name, id);
});