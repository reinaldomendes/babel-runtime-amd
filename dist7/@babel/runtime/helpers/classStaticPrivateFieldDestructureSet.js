define("@babel/runtime/helpers/classStaticPrivateFieldDestructureSet", ["exports","./classApplyDescriptorDestructureSet","./classCheckPrivateStaticAccess","./classCheckPrivateStaticFieldDescriptor","./interopRequireDefault"], function (_exports, _classApplyDescriptorDestructureSet, _classCheckPrivateStaticAccess, _classCheckPrivateStaticFieldDescriptor, _interopRequireDefault) {
  "use strict";

  _interopRequireDefault = _interopRequireDefault.__esModule ? _interopRequireDefault.default : _interopRequireDefault;

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _classStaticPrivateFieldDestructureSet;
  _classApplyDescriptorDestructureSet = _interopRequireDefault(_classApplyDescriptorDestructureSet);
  _classCheckPrivateStaticAccess = _interopRequireDefault(_classCheckPrivateStaticAccess);
  _classCheckPrivateStaticFieldDescriptor = _interopRequireDefault(_classCheckPrivateStaticFieldDescriptor);

  function _classStaticPrivateFieldDestructureSet(receiver, classConstructor, descriptor) {
    (0, _classCheckPrivateStaticAccess["default"])(receiver, classConstructor);
    (0, _classCheckPrivateStaticFieldDescriptor["default"])(descriptor, "set");
    return (0, _classApplyDescriptorDestructureSet["default"])(receiver, descriptor);
  }
});