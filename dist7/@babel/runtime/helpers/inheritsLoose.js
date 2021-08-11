define("@babel/runtime/helpers/inheritsLoose", ["exports","./setPrototypeOf"], function (_exports, _setPrototypeOf) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _inheritsLoose;

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    (0, _setPrototypeOf["default"])(subClass, superClass);
  }
});