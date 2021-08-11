define("@babel/runtime/helpers/classPrivateFieldSet", ["exports","./classApplyDescriptorSet","./classExtractFieldDescriptor"], function (_exports, _classApplyDescriptorSet, _classExtractFieldDescriptor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _classPrivateFieldSet;

  function _classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = (0, _classExtractFieldDescriptor["default"])(receiver, privateMap, "set");
    (0, _classApplyDescriptorSet["default"])(receiver, descriptor, value);
    return value;
  }
});