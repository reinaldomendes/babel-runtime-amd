define("@babel/runtime/helpers/classPrivateFieldDestructureSet", ["exports","./classApplyDescriptorDestructureSet","./classExtractFieldDescriptor","./interopRequireDefault"], function (_exports, _classApplyDescriptorDestructureSet, _classExtractFieldDescriptor, _interopRequireDefault) {
  "use strict";

  _interopRequireDefault = _interopRequireDefault.__esModule ? _interopRequireDefault.default : _interopRequireDefault;

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _classPrivateFieldDestructureSet;
  _classApplyDescriptorDestructureSet = _interopRequireDefault(_classApplyDescriptorDestructureSet);
  _classExtractFieldDescriptor = _interopRequireDefault(_classExtractFieldDescriptor);

  function _classPrivateFieldDestructureSet(receiver, privateMap) {
    var descriptor = (0, _classExtractFieldDescriptor["default"])(receiver, privateMap, "set");
    return (0, _classApplyDescriptorDestructureSet["default"])(receiver, descriptor);
  }
});