define("@babel/runtime/helpers/classPrivateFieldDestructureSet", ["exports","./classApplyDescriptorDestructureSet","./classExtractFieldDescriptor"], function (_exports, _classApplyDescriptorDestructureSet, _classExtractFieldDescriptor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _classPrivateFieldDestructureSet;

  function _classPrivateFieldDestructureSet(receiver, privateMap) {
    var descriptor = (0, _classExtractFieldDescriptor["default"])(receiver, privateMap, "set");
    return (0, _classApplyDescriptorDestructureSet["default"])(receiver, descriptor);
  }
});