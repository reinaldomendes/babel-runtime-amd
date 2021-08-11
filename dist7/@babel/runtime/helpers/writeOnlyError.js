define("@babel/runtime/helpers/writeOnlyError", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _writeOnlyError;

  function _writeOnlyError(name) {
    throw new TypeError("\"" + name + "\" is write-only");
  }
});