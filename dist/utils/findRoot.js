"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findRoot = findRoot;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _findUp = _interopRequireDefault(require("find-up"));

var _path = _interopRequireDefault(require("path"));

function findRoot() {
  return _findRoot.apply(this, arguments);
}

function _findRoot() {
  _findRoot = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    var rootConfig, root;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _findUp.default)('config.xml');

          case 2:
            rootConfig = _context.sent;

            if (rootConfig) {
              _context.next = 5;
              break;
            }

            throw new Error('corpack must be run from inside a Cordova application root.');

          case 5:
            root = _path.default.dirname(rootConfig);
            return _context.abrupt("return", root);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _findRoot.apply(this, arguments);
}