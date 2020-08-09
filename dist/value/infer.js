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
// let o = {
//     a : 1,
//     b : 2,
//     c : 'data'
// }
//
// let bb = {
//     a : 1,
//     b : 2,
//     c : 'data',
//     d : true,
//     e : {}
// }
//
//
// function f<O extends object>(o : O) : Infer<O> {
//     return <Infer<O>><any> 1
// }
//
// let a : string|number = f(o);
// let ab : string|number|boolean|object = f(bb);
//# sourceMappingURL=infer.js.map