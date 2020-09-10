(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-string/message/sentence"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const sentence_1 = require("@dikac/t-string/message/sentence");
    /**
     * {@param valid} type is valid or not
     * {@param property} object property
     * {@param type} expected type
     */
    function Value(valid, property, type) {
        const sentence = new sentence_1.default(valid);
        sentence.reject = 'value is not';
        sentence.accept = 'value is';
        sentence.subject = property.toString();
        sentence.expect = type;
        return sentence.message;
    }
    exports.default = Value;
});
//# sourceMappingURL=value.js.map