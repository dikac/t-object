(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../string/name", "@dikac/t-message/sentence"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const name_1 = require("../../string/name");
    const sentence_1 = require("@dikac/t-message/sentence");
    const sentence = new sentence_1.default(false, '', {
        invalid: 'is not',
        valid: 'is',
    }, 'empty object');
    /**
     * string intended for not empty object
     *
     * @param valid
     * @param value
     */
    function NotEmpty(valid, value) {
        sentence.subject = '"' + name_1.default(value) + '"';
        sentence.valid = valid;
        return sentence.message;
    }
    exports.default = NotEmpty;
});
//# sourceMappingURL=not-empty.js.map