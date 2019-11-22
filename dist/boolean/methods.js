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
    function Methods(object, ...properties) {
        for (let property of properties) {
            if (typeof object[property] !== "function") {
                return false;
            }
        }
        return true;
    }
    exports.default = Methods;
});
//# sourceMappingURL=methods.js.map