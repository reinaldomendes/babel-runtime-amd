define("@babel/runtime/helpers/toPrimitive", ["exports","@babel/runtime/helpers/typeof"], function (_exports, _typeof2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _toPrimitive;

  function _toPrimitive(input, hint) {
    if ((0, _typeof2["default"])(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];

    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if ((0, _typeof2["default"])(res) !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }

    return (hint === "string" ? String : Number)(input);
  }
});