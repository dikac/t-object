(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-message/boolean/message", "../../recursive/map-callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const message_1 = require("@dikac/t-message/boolean/message");
    const map_callback_1 = require("../../recursive/map-callback");
    function Property(object, callback, validation, properties = []) {
        let validate = function (value) {
            return message_1.default(value, validation);
        };
        return map_callback_1.default(object, validate, callback, properties);
    }
    exports.default = Property;
});
//# sourceMappingURL=property.js.map