(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-message/sentence"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const sentence_1 = require("@dikac/t-message/sentence");
    const sentence = new sentence_1.default(false, '', {
        invalid: 'value is not',
        valid: 'value is',
    }, '');
    /**
     * {@param valid} type is valid or not
     * {@param property} object property
     * {@param type} expected type
     */
    function Value(valid, property, type) {
        sentence.subject = property.toString();
        sentence.object = type;
        sentence.valid = valid;
        return sentence.message;
    }
    exports.default = Value;
});
//# sourceMappingURL=value.js.map