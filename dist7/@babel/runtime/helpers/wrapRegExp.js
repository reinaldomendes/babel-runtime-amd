define("@babel/runtime/helpers/wrapRegExp", ["exports","@babel/runtime/helpers/typeof","./setPrototypeOf","./inherits"], function (_exports, _typeof2, _setPrototypeOf, _inherits) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _wrapRegExp;

  function _wrapRegExp() {
    _exports["default"] = _wrapRegExp = function _wrapRegExp(re, groups) {
      return new BabelRegExp(re, undefined, groups);
    };

    var _super = RegExp.prototype;

    var _groups = new WeakMap();

    function BabelRegExp(re, flags, groups) {
      var _this = new RegExp(re, flags);

      _groups.set(_this, groups || _groups.get(re));

      return (0, _setPrototypeOf["default"])(_this, BabelRegExp.prototype);
    }

    (0, _inherits["default"])(BabelRegExp, RegExp);

    BabelRegExp.prototype.exec = function (str) {
      var result = _super.exec.call(this, str);

      if (result) result.groups = buildGroups(result, this);
      return result;
    };

    BabelRegExp.prototype[Symbol.replace] = function (str, substitution) {
      if (typeof substitution === "string") {
        var groups = _groups.get(this);

        return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) {
          return "$" + groups[name];
        }));
      } else if (typeof substitution === "function") {
        var _this = this;

        return _super[Symbol.replace].call(this, str, function () {
          var args = arguments;

          if ((0, _typeof2["default"])(args[args.length - 1]) !== "object") {
            args = [].slice.call(args);
            args.push(buildGroups(args, _this));
          }

          return substitution.apply(this, args);
        });
      } else {
        return _super[Symbol.replace].call(this, str, substitution);
      }
    };

    function buildGroups(result, re) {
      var g = _groups.get(re);

      return Object.keys(g).reduce(function (groups, name) {
        groups[name] = result[g[name]];
        return groups;
      }, Object.create(null));
    }

    return _wrapRegExp.apply(this, arguments);
  }
});