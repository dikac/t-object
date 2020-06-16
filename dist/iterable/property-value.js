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
     * iterate {@param object} property and value in array form
     */
    function* PropertyValue(object) {
        for (const property in object) {
            yield [property, object[property]];
        }
    }
    exports.default = PropertyValue;
});
//# sourceMappingURL=property-value.js.map