(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../../record/map-callback", "@dikac/t-message/boolean/message", "@dikac/t-message/infer/value"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const map_callback_1 = require("../../../record/map-callback");
    const message_1 = require("@dikac/t-message/boolean/message");
    const value_1 = require("@dikac/t-message/infer/value");
    function Standard(record) {
        return map_callback_1.default(record, message_1.default, value_1.default);
    }
    exports.default = Standard;
});
//# sourceMappingURL=standard.js.map