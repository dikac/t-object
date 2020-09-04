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
     * assign all {@param source} value to all undefined value in {@param target}
     */
    function Default(target, source) {
        for (let property in source) {
            // @ts-ignore
            if (target[property] === undefined) {
                // @ts-ignore
                target[property] = source[property];
            }
        }
        return target;
    }
    exports.default = Default;
});
//# sourceMappingURL=default.js.map