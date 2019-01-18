"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ex = ex;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _ora = _interopRequireDefault(require("ora"));

var _child_process = require("child_process");

var _shellQuote = require("shell-quote");

var _lodash = _interopRequireDefault(require("lodash"));

function ex(_x) {
  return _ex.apply(this, arguments);
} // async function ex(cmd, opts = {}) {
//   const { text, ...rest } = _.defaults({}, opts)
//   const spinner = ora().start(text || cmd)
//   return new Promise((resolve, reject) => {
//     exec(cmd, { maxBuffer: 1024 * 1024, ...rest }, (err, stdout, stderr) => {
//       if (err) {
//         spinner.fail()
//         console.error(`Command : ${cmd}`)
//         console.error(err.message)
//         reject()
//         return
//       }
//       spinner.succeed()
//       resolve()
//     })
//   })
// }


function _ex() {
  _ex = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(cmdStr) {
    var opts,
        _$defaults,
        text,
        rest,
        spinner,
        parsed,
        cmd,
        args,
        stderr,
        _args = arguments;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            opts = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            _$defaults = _lodash.default.defaults({
              env: (0, _objectSpread2.default)({}, process.env)
            }, opts), text = _$defaults.text, rest = (0, _objectWithoutProperties2.default)(_$defaults, ["text"]);
            spinner = null;
            if (text) spinner = (0, _ora.default)().start(text);
            parsed = (0, _shellQuote.parse)(cmdStr);
            cmd = parsed.shift();
            args = (0, _toConsumableArray2.default)(parsed);
            stderr = [];
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              var child = (0, _child_process.spawn)(cmd, args, (0, _objectSpread2.default)({}, rest));
              child.on('exit', function (code, signal) {
                if (code !== 0) {
                  if (text) spinner.fail();
                  console.error(stderr.join(''));
                  throw new Error("Command failed: ".concat(cmdStr));
                  reject();
                }

                if (text) spinner.succeed();
                resolve();
              }); // child.stdout.on('data', data => {
              //   console.log(data)
              // })

              child.stderr.on('data', function (data) {
                stderr.push(data);
              });
              if (!text) child.stdout.pipe(process.stdout);
              if (!text) child.stderr.pipe(process.stderr);
            }));

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _ex.apply(this, arguments);
}