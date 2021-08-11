define("@babel/runtime/helpers/createSuper", ["exports","./getPrototypeOf","./isNativeReflectConstruct","./possibleConstructorReturn","./interopRequireDefault"], function (_exports, _getPrototypeOf, _isNativeReflectConstruct, _possibleConstructorReturn, _interopRequireDefault) {
  "use strict";

  _interopRequireDefault = _interopRequireDefault.__esModule ? _interopRequireDefault.default : _interopRequireDefault;

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _createSuper;
  _getPrototypeOf = _interopRequireDefault(_getPrototypeOf);
  _isNativeReflectConstruct = _interopRequireDefault(_isNativeReflectConstruct);
  _possibleConstructorReturn = _interopRequireDefault(_possibleConstructorReturn);

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = (0, _isNativeReflectConstruct["default"])();
    return function _createSuperInternal() {
      var Super = (0, _getPrototypeOf["default"])(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = (0, _getPrototypeOf["default"])(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return (0, _possibleConstructorReturn["default"])(this, result);
    };
  }
});