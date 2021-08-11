define("@babel/runtime/helpers/arrayWithoutHoles", ["exports","./arrayLikeToArray"], function (_exports, _arrayLikeToArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _arrayWithoutHoles;

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return (0, _arrayLikeToArray["default"])(arr);
  }
});