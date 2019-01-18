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
  _regenerator.default.mark(function _callee(dir, id, name) {
    var platform,
        submixRoot,
        saved,
        _args = arguments;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            platform = _args.length > 3 && _args[3] !== undefined ? _args[3] : 'ios';
            _context.t0 = _path.default;
            _context.next = 4;
            return (0, _findUp.default)('package.json', {
              cwd: __dirname
            });

          case 4:
            _context.t1 = _context.sent;
            submixRoot = _context.t0.dirname.call(_context.t0, _context.t1);
            saved = process.cwd();
            _context.prev = 7;
            _context.next = 10;
            return (0, _utils.ex)("rm -rf \"./".concat(dir, "\""), {
              text: 'Cleaning target'
            });

          case 10:
            _context.next = 12;
            return (0, _utils.ex)("cordova create \"".concat(dir, "\" \"").concat(id, "\" \"").concat(name, "\""), {
              text: 'Creating fresh Cordova project'
            });

          case 12:
            process.chdir(_path.default.resolve(saved, dir));
            _context.next = 15;
            return (0, _utils.ex)("cordova platform add ".concat(platform), {
              text: "Adding platform: ".concat(platform)
            });

          case 15:
            _context.next = 17;
            return (0, _utils.ex)("npm i ".concat(deps.join(' ')), {
              text: 'Installing npm dependencies'
            });

          case 17:
            _context.next = 19;
            return (0, _utils.ex)("rm -rf www", {
              text: 'Clearing build directory'
            });

          case 19:
            _context.next = 21;
            return (0, _utils.ex)("cp -r ".concat(_path.default.resolve(submixRoot, 'templates/src'), " ."), {
              text: 'Installing boilerplate app source'
            });

          case 21:
            _context.next = 23;
            return (0, _utils.ex)("cp -r ".concat(_path.default.resolve(submixRoot, 'templates/webpack.mix.js'), " ."), {
              text: 'Installing webpack configuration'
            });

          case 23:
            _context.next = 25;
            return (0, _utils.ex)("cp -r ".concat(_path.default.resolve(submixRoot, 'templates/build.json'), " ."), {
              text: 'Installing platform build configuration'
            });

          case 25:
            _context.next = 27;
            return (0, _utils.ex)('NODE_ENV=development node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js', {
              text: 'Building initial version'
            });

          case 27:
            _context.next = 29;
            return (0, _utils.ex)("cordova emulate ".concat(platform), {
              text: 'Building and launching simulator'
            });

          case 29:
            _context.prev = 29;
            process.chdir(saved);
            return _context.finish(29);

          case 32:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[7,, 29, 32]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());