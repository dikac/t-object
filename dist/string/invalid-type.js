(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function InvalidType(data) {
        return `property '${data.property.toString()}' value is invalid according to '${data.value}'`;
    }
    exports.default = InvalidType;
});
//# sourceMappingURL=invalid-type.js.map