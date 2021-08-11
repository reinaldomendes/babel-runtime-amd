define("@babel/runtime/helpers/get", ["exports","./superPropBase","./interopRequireDefault"], function (_exports, _superPropBase, _interopRequireDefault) {
  "use strict";

  _interopRequireDefault = _interopRequireDefault.__esModule ? _interopRequireDefault.default : _interopRequireDefault;

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _get;
  _superPropBase = _interopRequireDefault(_superPropBase);

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _exports["default"] = _get = Reflect.get;
    } else {
      _exports["default"] = _get = function _get(target, property, receiver) {
        var base = (0, _superPropBase["default"])(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }
});