(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./property"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const property_1 = require("./property");
    function PropertyActual(property, type, value) {
        return property_1.default(property, type) + `, actual '${value}'`;
    }
    exports.default = PropertyActual;
});
//# sourceMappingURL=property-actual.js.map