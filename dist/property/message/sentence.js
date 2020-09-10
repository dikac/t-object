(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-string/message/sentences", "../../string/name"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const sentences_1 = require("@dikac/t-string/message/sentences");
    const name_1 = require("../../string/name");
    function Sentence(valid, target, property, accept, reject, object) {
        let sentence = new sentences_1.default(valid);
        sentence.subject = [name_1.default(target) + '.' + property.toLocaleString()];
        sentence.accept = accept;
        sentence.reject = reject;
        sentence.expect = object;
        return sentence;
    }
    exports.default = Sentence;
});
//# sourceMappingURL=sentence.js.map