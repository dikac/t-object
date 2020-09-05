(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../property/boolean/exists"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const exists_1 = require("../../property/boolean/exists");
    function Property(value) {
        if (!exists_1.default(value, 'value')) {
            return false;
        }
        return true;
    }
    exports.default = Property;
});
//# sourceMappingURL=property.js.map