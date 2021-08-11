define("@babel/runtime/helpers/classPrivateFieldGet", ["exports","./classApplyDescriptorGet","./classExtractFieldDescriptor"], function (_exports, _classApplyDescriptorGet, _classExtractFieldDescriptor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _classPrivateFieldGet;

  function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = (0, _classExtractFieldDescriptor["default"])(receiver, privateMap, "get");
    return (0, _classApplyDescriptorGet["default"])(receiver, descriptor);
  }
});