(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-value/message/callback", "../boolean/object"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const callback_1 = require("@dikac/t-value/message/callback");
    const object_1 = require("../boolean/object");
    //type Return<Msg, Argument> = Readonly<Validatable<false> & Message<Msg> & Value<Argument>> | Readonly<Validatable<true> & Message<Msg> & Value<object>>;
    function Object_(value, message) {
        return callback_1.default(value, object_1.default, message);
    }
    exports.default = Object_;
});
//# sourceMappingURL=object.js.map