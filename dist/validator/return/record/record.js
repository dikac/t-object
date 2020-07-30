(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
//
//
// let opt : PartialUnion<globalThis.Record<PropertyKey, ValidatableInterface & Message>> = {}
//
// let rr : globalThis.Record<PropertyKey, ValidatableInterface & Message> = {
//     c : {
//         valid: true,
//         message: 'string'
//     }
// }
//
// let r : globalThis.Record<PropertyKey, Validator<any, ValidatableInterface & Message>> = {
//     c : Typeof("string")
// }
//
//
// let converted : Record<typeof r> = rr;
// opt = rr;
//# sourceMappingURL=record.js.map