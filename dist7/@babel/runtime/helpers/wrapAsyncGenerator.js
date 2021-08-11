define("@babel/runtime/helpers/wrapAsyncGenerator", ["exports","./AsyncGenerator"], function (_exports, _AsyncGenerator) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _wrapAsyncGenerator;

  function _wrapAsyncGenerator(fn) {
    return function () {
      return new _AsyncGenerator["default"](fn.apply(this, arguments));
    };
  }
});