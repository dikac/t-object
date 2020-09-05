(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../descriptor/boolean/setter", "../../descriptor/boolean/property", "../../descriptor/from-object", "./exists"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const setter_1 = require("../../descriptor/boolean/setter");
    const property_1 = require("../../descriptor/boolean/property");
    const from_object_1 = require("../../descriptor/from-object");
    const exists_1 = require("./exists");
    /**
     * check if property is writable
     */
    function Writable(object, property) {
        let descriptor = from_object_1.default(object, property);
        if (!descriptor) {
            return false;
        }
        // property
        // all descriptor property must true
        if (property_1.default(descriptor) && exists_1.default(descriptor, 'writable') && descriptor.writable) {
            return true;
        }
        // setter
        if (setter_1.default(descriptor)) {
            return true;
        }
        return false;
    }
    exports.default = Writable;
});
//# sourceMappingURL=writable.js.map