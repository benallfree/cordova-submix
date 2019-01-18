"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _commander = _interopRequireDefault(require("commander"));

var _path = _interopRequireDefault(require("path"));

var _findUp = _interopRequireDefault(require("find-up"));

var _fs = _interopRequireDefault(require("fs"));

var _editJsonFile = _interopRequireDefault(require("edit-json-file"));

var _lodash = _interopRequireDefault(require("lodash"));

var _utils = require("../utils");

var deps = ['benallfree/cordova-submix#master'];

_commander.default.command('create <dir> <id> <name> [ios|android]').alias('n').description('Create a new Submix project').action(
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(dir, id, name) {
    var platform,
        submixRoot,
        saved,
        dst,
        file,
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
            dst = _path.default.resolve(saved, dir);
            _context.prev = 8;

            if (!_fs.default.existsSync(dst)) {
              _context.next = 11;
              break;
            }

            throw new Error("Path ".concat(dst, " exists, aborting"));

          case 11:
            _context.next = 13;
            return (0, _utils.ex)("cordova create \"".concat(dir, "\" \"").concat(id, "\" \"").concat(name, "\""), {
              text: 'Creating fresh Cordova project'
            });

          case 13:
            process.chdir(dst);
            _context.next = 16;
            return (0, _utils.ex)("cordova platform add ".concat(platform), {
              text: "Adding platform: ".concat(platform)
            });

          case 16:
            _context.next = 18;
            return (0, _utils.ex)("npm i ".concat(_lodash.default.map(deps, function (d) {
              return "\"".concat(d, "\"");
            }).join(' ')), {
              text: 'Installing npm dependencies'
            });

          case 18:
            file = (0, _editJsonFile.default)(_path.default.resolve(dst, 'package.json'));
            file.set('scripts.dev', 'submix dev');
            file.set('scripts.hot', 'submix hot');
            file.set('scripts.prod', 'submix prod');
            file.set('scripts.watch', 'submix watch');
            file.save();
            _context.next = 26;
            return (0, _utils.ex)("rm -rf www", {
              text: 'Clearing build directory'
            });

          case 26:
            _context.next = 28;
            return (0, _utils.ex)("cp -r ".concat(_path.default.resolve(submixRoot, 'templates/src'), " ."), {
              text: 'Installing boilerplate app source'
            });

          case 28:
            _context.next = 30;
            return (0, _utils.ex)("cp -r ".concat(_path.default.resolve(submixRoot, 'templates/webpack.mix.js'), " ."), {
              text: 'Installing webpack configuration'
            });

          case 30:
            _context.next = 32;
            return (0, _utils.ex)("cp -r ".concat(_path.default.resolve(submixRoot, 'templates/build.json'), " ."), {
              text: 'Installing platform build configuration'
            });

          case 32:
            _context.next = 34;
            return (0, _utils.ex)('npm run dev', {
              text: 'Building initial version'
            });

          case 34:
            _context.next = 36;
            return (0, _utils.ex)("cordova emulate ".concat(platform), {
              text: 'Building and launching simulator'
            });

          case 36:
            _context.next = 41;
            break;

          case 38:
            _context.prev = 38;
            _context.t2 = _context["catch"](8);
            console.error(_context.t2.message);

          case 41:
            _context.prev = 41;
            process.chdir(saved);
            return _context.finish(41);

          case 44:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[8, 38, 41, 44]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());