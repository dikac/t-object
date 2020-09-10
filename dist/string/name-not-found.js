(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-string/message/sentences"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const sentences_1 = require("@dikac/t-string/message/sentences");
    function NameNotFound(valid, value, subject = 'type', conversion = value => typeof value) {
        let sentence = new sentences_1.default(valid);
        sentence.accept = ['have'];
        sentence.reject = ['does not have'];
        sentence.subject.push(subject);
        sentence.expect.push('prototype name');
        if (!valid) {
            sentence.subject.push(conversion(value));
        }
        return sentence.message;
    }
    exports.default = NameNotFound;
});
//# sourceMappingURL=name-not-found.js.map