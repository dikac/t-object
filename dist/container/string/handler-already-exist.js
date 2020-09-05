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
    function HandlerAlreadyExist(property) {
        return `handler ${property.toString()} already exists`;
    }
    exports.default = HandlerAlreadyExist;
});
//# sourceMappingURL=handler-already-exist.js.map