define("@babel/runtime/helpers/classStaticPrivateFieldSpecSet", ["exports","./classApplyDescriptorSet","./classCheckPrivateStaticAccess","./classCheckPrivateStaticFieldDescriptor","./interopRequireDefault"], function (_exports, _classApplyDescriptorSet, _classCheckPrivateStaticAccess, _classCheckPrivateStaticFieldDescriptor, _interopRequireDefault) {
  "use strict";

  _interopRequireDefault = _interopRequireDefault.__esModule ? _interopRequireDefault.default : _interopRequireDefault;

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _classStaticPrivateFieldSpecSet;
  _classApplyDescriptorSet = _interopRequireDefault(_classApplyDescriptorSet);
  _classCheckPrivateStaticAccess = _interopRequireDefault(_classCheckPrivateStaticAccess);
  _classCheckPrivateStaticFieldDescriptor = _interopRequireDefault(_classCheckPrivateStaticFieldDescriptor);

  function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
    (0, _classCheckPrivateStaticAccess["default"])(receiver, classConstructor);
    (0, _classCheckPrivateStaticFieldDescriptor["default"])(descriptor, "set");
    (0, _classApplyDescriptorSet["default"])(receiver, descriptor, value);
    return value;
  }
});