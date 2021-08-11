define("@babel/runtime/helpers/asyncIterator", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _asyncIterator;

  function _asyncIterator(iterable) {
    var method;

    if (typeof Symbol !== "undefined") {
      if (Symbol.asyncIterator) method = iterable[Symbol.asyncIterator];
      if (method == null && Symbol.iterator) method = iterable[Symbol.iterator];
    }

    if (method == null) method = iterable["@@asyncIterator"];
    if (method == null) method = iterable["@@iterator"];
    if (method == null) throw new TypeError("Object is not async iterable");
    return method.call(iterable);
  }
});