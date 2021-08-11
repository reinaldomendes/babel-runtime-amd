define("@babel/runtime/helpers/classPrivateFieldLooseKey", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _classPrivateFieldKey;
  var id = 0;

  function _classPrivateFieldKey(name) {
    return "__private_" + id++ + "_" + name;
  }
});