define("@babel/runtime/helpers/classStaticPrivateFieldSpecSet", ["exports","./classApplyDescriptorSet","./classCheckPrivateStaticAccess","./classCheckPrivateStaticFieldDescriptor"], function (_exports, _classApplyDescriptorSet, _classCheckPrivateStaticAccess, _classCheckPrivateStaticFieldDescriptor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _classStaticPrivateFieldSpecSet;

  function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
    (0, _classCheckPrivateStaticAccess["default"])(receiver, classConstructor);
    (0, _classCheckPrivateStaticFieldDescriptor["default"])(descriptor, "set");
    (0, _classApplyDescriptorSet["default"])(receiver, descriptor, value);
    return value;
  }
});