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
        dst,
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
            // if (fs.existsSync(dst)) {
            //   throw new Error(`Path ${dst} exists, aborting`)
            // }
            // await ex(`cordova create "${dir}" "${id}" "${name}"`, {
            //   text: 'Creating fresh Cordova project',
            // })
            process.chdir(dst); // await ex(`cordova platform add ${platform}`, {
            //   text: `Adding platform: ${platform}`,
            // })
            // await ex(`npm i ${deps.join(' ')}`, {
            //   text: 'Installing npm dependencies',
            // })
            // const file = editJsonFile(path.resolve(dst, 'package.json'))
            // file.set('scripts.dev', 'submix dev')
            // file.set('scripts.hot', 'submix hot')
            // file.set('scripts.prod', 'submix prod')
            // file.set('scripts.watch', 'submix watch')
            // file.save()

            _context.next = 12;
            return (0, _utils.ex)("rm -rf www", {
              text: 'Clearing build directory'
            });

          case 12:
            _context.next = 14;
            return (0, _utils.ex)("cp -r ".concat(_path.default.resolve(submixRoot, 'templates/src'), " ."), {
              text: 'Installing boilerplate app source'
            });

          case 14:
            _context.next = 16;
            return (0, _utils.ex)("cp -r ".concat(_path.default.resolve(submixRoot, 'templates/webpack.mix.js'), " ."), {
              text: 'Installing webpack configuration'
            });

          case 16:
            _context.next = 18;
            return (0, _utils.ex)("cp -r ".concat(_path.default.resolve(submixRoot, 'templates/build.json'), " ."), {
              text: 'Installing platform build configuration'
            });

          case 18:
            _context.next = 23;
            break;

          case 20:
            _context.prev = 20;
            _context.t2 = _context["catch"](8);
            console.error(_context.t2.message);

          case 23:
            _context.prev = 23;
            process.chdir(saved);
            return _context.finish(23);

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[8, 20, 23, 26]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());