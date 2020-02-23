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
    function PropertyObject(data) {
        return property_1.default(data.property, data.type);
    }
    exports.default = PropertyObject;
});
//# sourceMappingURL=property-object.js.map