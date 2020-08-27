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
    function Property(message, property, delimiter = ' : ', conversion = (value) => value + '') {
        let string = property.toString() + delimiter + conversion(message.message);
        return { message: string };
    }
    exports.default = Property;
});
//# sourceMappingURL=property.js.map