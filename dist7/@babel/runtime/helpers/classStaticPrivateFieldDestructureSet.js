define("@babel/runtime/helpers/classStaticPrivateFieldDestructureSet", ["exports","./classApplyDescriptorDestructureSet","./classCheckPrivateStaticAccess","./classCheckPrivateStaticFieldDescriptor"], function (_exports, _classApplyDescriptorDestructureSet, _classCheckPrivateStaticAccess, _classCheckPrivateStaticFieldDescriptor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _classStaticPrivateFieldDestructureSet;

  function _classStaticPrivateFieldDestructureSet(receiver, classConstructor, descriptor) {
    (0, _classCheckPrivateStaticAccess["default"])(receiver, classConstructor);
    (0, _classCheckPrivateStaticFieldDescriptor["default"])(descriptor, "set");
    return (0, _classApplyDescriptorDestructureSet["default"])(receiver, descriptor);
  }
});