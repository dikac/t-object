(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../symbol/boolean/type"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const type_1 = require("../../symbol/boolean/type");
    function Type(value) {
        switch (typeof value) {
            case "number":
            case "string":
                return true;
        }
        return type_1.default(value);
    }
    exports.default = Type;
});
//# sourceMappingURL=type.js.map