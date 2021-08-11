define("@babel/runtime/helpers/maybeArrayLike", ["exports","./arrayLikeToArray"], function (_exports, _arrayLikeToArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _maybeArrayLike;

  function _maybeArrayLike(next, arr, i) {
    if (arr && !Array.isArray(arr) && typeof arr.length === "number") {
      var len = arr.length;
      return (0, _arrayLikeToArray["default"])(arr, i !== void 0 && i < len ? i : len);
    }

    return next(arr, i);
  }
});