"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getExternalIp = getExternalIp;

var _os = _interopRequireDefault(require("os"));

function getExternalIp() {
  var externalIp = null;

  var ifaces = _os.default.networkInterfaces();

  for (var dev in ifaces) {
    var iface = ifaces[dev].filter(function (details) {
      return details.family === 'IPv4' && details.internal === false;
    });
    if (iface.length > 0) externalIp = iface[0].address;
  }

  return externalIp;
}