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
     * remove null from {@param object}
     * @param object
     */
    function RemoveNull(object) {
        for (let property in object) {
            if (object[property] === null) {
                delete object[property];
            }
        }
        return object;
    }
    exports.default = RemoveNull;
});
//# sourceMappingURL=remove-null.js.map