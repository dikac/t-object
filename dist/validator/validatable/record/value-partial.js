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
    function ValuePartial(value, validators, stop = false) {
        let object = {};
        for (let property in validators) {
            const validator = validators[property];
            object[property] = validator.validate(value);
            if (object[property].valid === stop) {
                return object;
            }
        }
        return object;
    }
    exports.default = ValuePartial;
});
//# sourceMappingURL=value-partial.js.map