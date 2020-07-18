(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./string/object", "./object"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const object_1 = require("./string/object");
    const object_2 = require("./object");
    function ObjectStandard(value) {
        return object_2.default(value, object_1.default);
    }
    exports.default = ObjectStandard;
});
//# sourceMappingURL=object-standard.js.map