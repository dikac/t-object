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
    //
    // export default class ValueCallback<
    //     ValueT = unknown,
    //     RecordT extends Record<keyof RecordT, Validator<ValueT>> = Record<PropertyKey, Validator<ValueT>>,
    //     Result extends
    //         Function<[ValueT, RecordT], Partial<Record<keyof Result, Validatable>>> =
    //         Function<[ValueT, RecordT], Partial<Record<PropertyKey, Validatable>>>,
    //     MessageT extends Function<[ReturnType<Result>], unknown> = Function<[ReturnType<Result>], unknown>,
    //     ValidatableT extends Function<[ReturnType<Result>], Validatable> = Function<[ReturnType<Result>], Validatable>
    // > implements
    //     Value<ValueT>,
    //     Validatable,
    //     Validatables<ReturnType<Result>>,
    //     Message<ReturnType<MessageT>>
    // {
    //
    //     readonly validatables : ReturnType<Result>;
    //     readonly valid : boolean;
    //     readonly validatable : ReturnType<ValidatableT>;
    //     readonly message : ReturnType<MessageT>;
    //     readonly messages : ReturnType<Result>;
    //
    //     constructor(
    //         readonly value: ValueT,
    //         public validators : RecordT,
    //         public handler : Result,
    //         public validation : ValidatableT,
    //         message : MessageT
    //     ) {
    //
    //         this.validatables = <ReturnType<Result>>this.handler(value, this.validators);
    //         this.messages = this.validatables;
    //
    //         this.validatable = <ReturnType<ValidatableT>> this.validation(this.validatables);
    //         this.valid = this.validatable.valid;
    //         this.message = <ReturnType<MessageT>>message(this.validatables);
    //     }
    // }
    class ValueCallback {
        constructor(value, validators, handler, validation, message) {
            this.value = value;
            this.validators = validators;
            this.handler = handler;
            this.validation = validation;
            this.validatables = this.handler(value, this.validators);
            this.messages = this.validatables;
            this.validatable = this.validation(this.validatables);
            this.valid = this.validatable.valid;
            this.message = message(this.validatables);
        }
    }
    exports.default = ValueCallback;
});
//# sourceMappingURL=value-callback.js.map