(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/type", "../boolean/empty"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const type_1 = require("../boolean/type");
    const empty_1 = require("../boolean/empty");
    {
        let original = {
            data1: { data: 1 },
            data2: { data: 1 },
            data3: {
                data1: { data: 1 },
                data2: { data: 1 },
                data3: {
                    data1: { data: 1 },
                    data2: { data: 1 },
                }
            }
        };
        let converted = {
            data1: '1',
            data2: '2',
            data3: {
                data1: 'a',
                data2: 'a',
                data3: {
                    data1: 'a',
                    data2: 'a',
                }
            }
        };
    }
    // {
    //     let original = [
    //         1,2,3,[4,5]
    //     ];
    //
    //
    //
    //     let converted : Convert2<string, number, DeepRecord<number>> = [
    //         '1','2','3',['4','5']
    //     ];
    // }
    function Extract(object, property) {
        let result = {};
        for (let prop in object) {
            const value = object[prop];
            if (property in value) {
                // @ts-ignore
                result[prop] = value[property];
            }
            else if (type_1.default(value)) {
                // @ts-ignore
                const val = Extract(value, property);
                if (!empty_1.default(val)) {
                    result[prop] = val;
                }
            }
            else {
                throw new Error(`property ${property} is not exists in given object`);
            }
        }
        return result;
    }
    exports.default = Extract;
});
//# sourceMappingURL=extract.js.map