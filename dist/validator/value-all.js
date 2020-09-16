(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./validatable/record/value", "./value-callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const value_1 = require("./validatable/record/value");
    const value_callback_1 = require("./value-callback");
    /**
     * more specific implementation of {@link ValueCallback}
     *
     * Validate value with all record of {@link Validator}
     *
     * @param validators
     * record of {@link Validator} to be used against {@template BaseType} or {@template ValueType}
     *
     * @param validation
     *
     * @param message
     *
     * @template BaseType
     * Base value type for all {@link Validator}
     *
     * @template ValueType
     * value type {@link Validator}
     *
     * @template MessageType
     * message type {@link Validator}
     *
     * @template Validators
     * type of {@param validators}
     *
     * @template ValidatableType
     * result after processing {@template Validators} with {@template BaseType} or {@template ValueType}
     */
    function ValueAll(validators, validation, message) {
        return new value_callback_1.default(validators, value_1.default, validation, message);
    }
    exports.default = ValueAll;
});
//# sourceMappingURL=value-all.js.map