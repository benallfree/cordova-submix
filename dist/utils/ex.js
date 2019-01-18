"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ex = ex;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _ora = _interopRequireDefault(require("ora"));

var _child_process = require("child_process");

var _lodash = _interopRequireDefault(require("lodash"));

function ex(_x) {
  return _ex.apply(this, arguments);
}

function _ex() {
  _ex = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(cmd) {
    var opts,
        _$defaults,
        text,
        rest,
        spinner,
        _args = arguments;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            opts = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            _$defaults = _lodash.default.defaults({}, opts), text = _$defaults.text, rest = (0, _objectWithoutProperties2.default)(_$defaults, ["text"]);
            spinner = (0, _ora.default)().start(text || cmd);
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              (0, _child_process.exec)(cmd, (0, _objectSpread2.default)({
                maxBuffer: 1024 * 1024
              }, rest), function (err, stdout, stderr) {
                if (err) {
                  spinner.fail();
                  console.error("Command : ".concat(cmd));
                  console.error(err.message);
                  reject();
                  return;
                }

                spinner.succeed();
                resolve();
              });
            }));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _ex.apply(this, arguments);
}