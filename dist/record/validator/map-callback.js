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
    class MapCallback {
        constructor(validators, handler, validation) {
            this.validators = validators;
            this.handler = handler;
            this.validation = validation;
        }
        validate(argument) {
            let results = this.handler(argument, this.validators);
            let validatable = this.validation(results);
            return {
                get value() {
                    return argument;
                },
                get validatable() {
                    return validatable;
                },
                get validatables() {
                    return results;
                },
                get valid() {
                    return validatable.valid;
                },
            };
        }
    }
    exports.default = MapCallback;
});
//# sourceMappingURL=map-callback.js.map