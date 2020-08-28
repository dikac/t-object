(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../symbol/boolean/symbol"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const symbol_1 = require("../../symbol/boolean/symbol");
    /**
     * check if {@param value} is valid object key/property
     * @param value
     */
    function Property(value) {
        switch (typeof value) {
            case "number":
            case "string":
                return true;
        }
        return symbol_1.default(value);
    }
    exports.default = Property;
});
//# sourceMappingURL=property.js.map