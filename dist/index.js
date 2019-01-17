#!/usr/bin/env node
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _commander = _interopRequireDefault(require("commander"));

require("./commands");

var _package = _interopRequireDefault(require("./../package.json"));

_commander.default.version(_package.default.version);

_commander.default.on('command:*', function () {
  console.error('Invalid command: %s\nSee --help for a list of available commands.', process.argv.slice(2).join(' '));
  process.exit(1);
});

_commander.default.parse(process.argv);

if (!process.argv.slice(2).length) {
  _commander.default.outputHelp();
}