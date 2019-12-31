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
    function Structure(value, validators) {
        for (let property in validators) {
            let validator = validators[property];
            if (!validator(value[property])) {
                return false;
            }
        }
        return true;
    }
    exports.default = Structure;
});
//# sourceMappingURL=structure.js.map