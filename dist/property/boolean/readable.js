(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../descriptor/boolean/getter", "../../descriptor/from-object", "./exists"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const getter_1 = require("../../descriptor/boolean/getter");
    const from_object_1 = require("../../descriptor/from-object");
    const exists_1 = require("./exists");
    /**
     * check if property is readable
     */
    function Readable(object, property) {
        let descriptor = from_object_1.default(object, property);
        if (!descriptor) {
            return false;
        }
        if (exists_1.default(descriptor, 'value')) {
            return true;
        }
        // getter
        if (getter_1.default(descriptor)) {
            return true;
        }
        return false;
    }
    exports.default = Readable;
});
//# sourceMappingURL=readable.js.map