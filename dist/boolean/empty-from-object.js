(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./empty"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const empty_1 = require("./empty");
    function EmptyFromObject(object) {
        return empty_1.default(object.value, object.empty);
    }
    exports.default = EmptyFromObject;
});
//# sourceMappingURL=empty-from-object.js.map