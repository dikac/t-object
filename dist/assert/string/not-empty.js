(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../string/name", "@dikac/t-string/message/sentences-is"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const name_1 = require("../../string/name");
    const sentences_is_1 = require("@dikac/t-string/message/sentences-is");
    /**
     * string intended for not empty object
     *
     * @param valid
     * @param value
     * @param subject
     */
    function NotEmpty(valid, value, subject = '') {
        const sentence = new sentences_is_1.default(valid);
        sentence.expectation = {
            invalid: ['is not'],
            valid: ['is'],
        };
        sentence.value.push(subject);
        sentence.value.push(name_1.default(value));
        sentence.type = ['empty object'];
        return sentence.message;
    }
    exports.default = NotEmpty;
});
//# sourceMappingURL=not-empty.js.map