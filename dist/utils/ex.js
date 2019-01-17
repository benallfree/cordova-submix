"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ex = ex;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _ora = _interopRequireDefault(require("ora"));

var _util = _interopRequireDefault(require("util"));

var _lodash = _interopRequireDefault(require("lodash"));

var exec = _util.default.promisify(require('child_process').exec);

function ex(_x) {
  return _ex.apply(this, arguments);
}

function _ex() {
  _ex = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(cmd) {
    var opts,
        _$defaults,
        cwd,
        text,
        spinner,
        _ref,
        stdout,
        stderr,
        _args = arguments;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            opts = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            _$defaults = _lodash.default.defaults({}, opts), cwd = _$defaults.cwd, text = _$defaults.text;
            spinner = (0, _ora.default)().start(text || cmd);
            _context.prev = 3;
            _context.next = 6;
            return exec(cmd, {
              cwd: cwd
            });

          case 6:
            _ref = _context.sent;
            stdout = _ref.stdout;
            stderr = _ref.stderr;
            spinner.succeed();
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](3);
            spinner.fail(_context.t0.getMessage());

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[3, 12]]);
  }));
  return _ex.apply(this, arguments);
}