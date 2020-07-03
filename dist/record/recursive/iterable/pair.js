(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../../boolean/type", "../../../string/invalid-type"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const type_1 = require("../../../boolean/type");
    const invalid_type_1 = require("../../../string/invalid-type");
    class Pair {
        constructor(record, validation) {
            this.record = record;
            this.validation = validation;
            this.keys = [];
        }
        *[Symbol.iterator]() {
            for (const property in this.record) {
                const value = this.record[property];
                const properties = [...this.keys, property];
                if (this.validation(value)) {
                    yield [properties, value];
                }
                else if (type_1.default(value)) {
                    let recursive = new Pair(value, this.validation);
                    recursive.keys.push(...properties);
                    yield* recursive;
                }
                else {
                    throw new TypeError(invalid_type_1.default({
                        value: this.validation.toString(),
                        property: properties.join('.')
                    }));
                }
            }
        }
    }
    exports.default = Pair;
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
//# sourceMappingURL=pair.js.map