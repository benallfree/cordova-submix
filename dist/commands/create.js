"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _commander = _interopRequireDefault(require("commander"));

var _path = _interopRequireDefault(require("path"));

var _findUp = _interopRequireDefault(require("find-up"));

var _lodash = _interopRequireDefault(require("lodash"));

var _utils = require("../utils");

var deps = ['benallfree/cordova-submix'];

_commander.default.command('create <dir> <id> <name> [ios|android]').alias('n').description('Create a new Submix project').action(
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(dir, id, name, platforms) {
    var submixRoot, saved;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = _path.default;
            _context.next = 3;
            return (0, _findUp.default)('package.json', {
              cwd: __dirname
            });

          case 3:
            _context.t1 = _context.sent;
            submixRoot = _context.t0.dirname.call(_context.t0, _context.t1);
            saved = process.cwd();
            _context.prev = 6;
            _context.next = 9;
            return (0, _utils.ex)("rm -rf \"./".concat(dir, "\""), {
              text: 'Cleaning target'
            });

          case 9:
            _context.next = 11;
            return (0, _utils.ex)("cordova create \"".concat(dir, "\" \"").concat(id, "\" \"").concat(name, "\""), {
              text: 'Creating fresh Cordova project'
            });

          case 11:
            process.chdir(_path.default.resolve(saved, dir));
            _context.next = 14;
            return Promise.all(_lodash.default.map((platforms || 'ios').split('|'), function (p) {
              return (0, _utils.ex)("cordova platform add ".concat(p), {
                text: "Adding platform: ".concat(p)
              });
            }));

          case 14:
            _context.next = 16;
            return (0, _utils.ex)("npm i ".concat(deps.join(' ')), {
              text: 'Installing dependencies'
            });

          case 16:
            _context.next = 18;
            return (0, _utils.ex)("rm -rf www", {
              text: 'Clearing build directory'
            });

          case 18:
            _context.next = 20;
            return (0, _utils.ex)("cp -r ".concat(_path.default.resolve(submixRoot, 'templates/src'), " ."), {
              text: 'Installing boilerplate app source'
            });

          case 20:
            _context.next = 22;
            return (0, _utils.ex)("cp -r ".concat(_path.default.resolve(submixRoot, 'templates/webpack.mix.js'), " ."), {
              text: 'Installing webpack configuration'
            });

          case 22:
            _context.next = 24;
            return (0, _utils.ex)('NODE_ENV=development node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js', {
              text: 'Building initial version'
            });

          case 24:
            _context.prev = 24;
            process.chdir(saved);
            return _context.finish(24);

          case 27:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[6,, 24, 27]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}());