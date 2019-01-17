"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _create = require("./create");

Object.keys(_create).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _create[key];
    }
  });
});

var _dev = require("./dev");

Object.keys(_dev).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _dev[key];
    }
  });
});

var _prod = require("./prod");

Object.keys(_prod).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _prod[key];
    }
  });
});

var _watch = require("./watch");

Object.keys(_watch).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _watch[key];
    }
  });
});

var _hot = require("./hot");

Object.keys(_hot).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _hot[key];
    }
  });
});