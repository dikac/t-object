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
    function MapPartial(values, validators) {
        let object = {};
        for (let property in validators) {
            const validator = validators[property];
            const value = values[property];
            object[property] = validator.validate(value);
            if (!object[property].valid) {
                return object;
            }
        }
        return object;
    }
    exports.default = MapPartial;
});
//# sourceMappingURL=map-partial.js.map