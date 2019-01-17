"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _commander = _interopRequireDefault(require("commander"));

_commander.default.command('hot').alias('h').description('Watch with Hot Module Replacement').action(function (name, id) {
  console.log(name, id);
});