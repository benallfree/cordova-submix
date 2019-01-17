"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _commander = _interopRequireDefault(require("commander"));

_commander.default.command('dev').alias('d').description('Create development build').action(function (name, id) {
  console.log(name, id);
});