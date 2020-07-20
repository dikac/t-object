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
    /**
     * Calls {@param replace} on each property value from {@param object} recursively
     *
     * {@template Replace} type of replace result
     *
     * {@param replace} is only called when {@param validation} result of value is true
     * {@param validation} is used for distinguish value to be used for {@param replace} or to be used for recursion
     */
    function MapCallback(object, replace) {
        let result = {};
        for (const property in object) {
            const value = object[property];
            // let props : PropertyKey[] = [...properties, property];
            result[property] = replace(value, property);
            // if(validation(value)) {
            //
            //
            //
            // } else if(ObjectType<Object>(value)) {
            //
            //     const val = MapCallback(<any>value, validation, replace, props);
            //
            //     if(!Empty(val)) {
            //
            //         result[<PropertyKey>property] = val;
            //     }
            //
            // } else {
            //
            //     throw ValueValidation(property, 'valid', Name(validation))
            // }
        }
        return result;
    }
    exports.default = MapCallback;
});
//# sourceMappingURL=map-callback.js.map