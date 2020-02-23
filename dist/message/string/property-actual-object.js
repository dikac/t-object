(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./property-actual"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const property_actual_1 = require("./property-actual");
    function PropertyActualObject(data) {
        return property_actual_1.default(data.property, data.type, data.value);
    }
    exports.default = PropertyActualObject;
});
//# sourceMappingURL=property-actual-object.js.map