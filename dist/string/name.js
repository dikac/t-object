(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-class/boolean/class", "./name-not-found"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const class_1 = require("@dikac/t-class/boolean/class");
    const name_not_found_1 = require("./name-not-found");
    function Name(value) {
        if (value && value.constructor && value.constructor.name) {
            return value.constructor.name;
        }
        if (class_1.default(value)) {
            return value.name;
        }
        throw new Error(name_not_found_1.default(false, value));
    }
    exports.default = Name;
});
//# sourceMappingURL=name.js.map