(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./pair"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const pair_1 = require("./pair");
    class Property {
        constructor(record, validation) {
            this.record = record;
            this.validation = validation;
            this.keys = [];
        }
        *[Symbol.iterator]() {
            for (let [properties, value] of new pair_1.default(this.record, this.validation)) {
                yield properties;
            }
        }
    }
    exports.default = Property;
});
//
// export default function Pair<
//     Type,
//     Object extends Record<keyof any, Type> = Record<keyof any, Type>
//     >(
//     record : Object,
//     validation : (value : any) => value is Type,
// ) : DeepPartial<Object> {
//
//     let result : DeepPartial<Object> = <DeepPartial<Object>>{};
//
//     for(const property in record) {
//
//         const value : Type = <Type>record[property];
//
//         if(validation(value)) {
//
//             // @ts-ignore
//             result[property] = value;
//
//         } else if(ObjectType(value)) {
//
//             const results =  Pair(value, validation);
//
//             if(!Empty(results)) {
//
//                 result[property] = results;
//             }
//         }
//     }
//
//     return <DeepPartial<Object>> result;
// }
//# sourceMappingURL=property.js.map