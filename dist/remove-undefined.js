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
     * remove undefined from {@param object}
     * @param object
     */
    function RemoveUndefined(object) {
        for (let property in object) {
            if (object[property] === undefined) {
                delete object[property];
            }
        }
        return object;
    }
    exports.default = RemoveUndefined;
});
//# sourceMappingURL=remove-undefined.js.map