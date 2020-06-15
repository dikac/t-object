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
     * Check if {@param value} key and value valid according to {@param validation}
     * {@param validation} value is used for check {@param value} under the same property name
     */
    function Structure(value, validation) {
        for (let property in validation) {
            let validator = validation[property];
            if (!validator(value[property])) {
                return false;
            }
        }
        return true;
    }
    exports.default = Structure;
});
//# sourceMappingURL=structure.js.map