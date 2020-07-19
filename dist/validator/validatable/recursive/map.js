(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./map-partial"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const map_partial_1 = require("./map-partial");
    function Map(validators, values) {
        return map_partial_1.default(validators, values, false);
    }
    exports.default = Map;
});
//# sourceMappingURL=map.js.map