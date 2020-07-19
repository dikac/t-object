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
// /**
//  * Convert recursive {@template Container} Value type to {@template Replace} type
//  *
//  * {@template Value} is required, while {@tempalte Key} is optional to use for distinguish condition recursive {@template Container}
//  */
// type Value<Replace, Value, Key extends PropertyKey = PropertyKey, Container extends Recursive<Key, Value> = Recursive<Key, Value>> = {
//     [K in keyof Container]: Container[K] extends Recursive<Key, Value> ? Map<Replace, Value, Key, Container[K]>  : Replace
// }
//
// export default Value;
//# sourceMappingURL=value.js.map