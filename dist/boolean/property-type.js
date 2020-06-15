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
     * check if property {@param property} in {@param object} type is {@template Type}
     * {@param validation} is use for validate value type
     */
    function PropertyType(object, property, validation) {
        // @ts-ignore
        return validation(object[property]);
    }
    exports.default = PropertyType;
});
//# sourceMappingURL=property-type.js.map