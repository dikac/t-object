(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../string/name", "@dikac/t-string/message/sentences-must"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const name_1 = require("../../string/name");
    const sentences_must_1 = require("@dikac/t-string/message/sentences-must");
    /**
     * string intended for empty object
     *
     * @param valid
     * @param value
     * @param subject
     */
    function Empty(valid, value, subject = '') {
        const sentence = sentences_must_1.default(valid);
        sentence.subject.push(subject);
        sentence.subject.push(`"${name_1.default(value)}"`);
        sentence.expect = ['empty object'];
        return sentence.message;
    }
    exports.default = Empty;
});
//# sourceMappingURL=empty.js.map