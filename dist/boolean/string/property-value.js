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
    /**
     * {@param valid} type is valid or not
     * {@param property} object property
     * {@param type} expected type
     */
    function PropertyValue(valid, property, type) {
        property = property.toString();
        if (valid) {
            return `property "${property}" value is "${type}"`;
        }
        else {
            return `property "${property}" value is not "${type}"`;
        }
    }
    exports.default = PropertyValue;
});
//# sourceMappingURL=property-value.js.map