(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../descriptor/boolean/getter", "../../descriptor/boolean/property", "../../descriptor/from-object"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const getter_1 = require("../../descriptor/boolean/getter");
    const property_1 = require("../../descriptor/boolean/property");
    const from_object_1 = require("../../descriptor/from-object");
    /**
     * check if property is readable
     */
    function Readable(object, property) {
        let descriptor = from_object_1.default(object, property);
        if (!descriptor) {
            return false;
        }
        // property
        // all descriptor property must true
        if (property_1.default(descriptor)) {
            return true;
        }
        // setter
        if (getter_1.default(descriptor)) {
            return true;
        }
        return false;
    }
    exports.default = Readable;
});
//# sourceMappingURL=readable.js.map