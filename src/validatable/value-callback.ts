import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Validatables from "./validatables/validatables";
import Message from "@dikac/t-message/message";
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

export default class ValueCallback<
    ValueT = unknown,
    MessageT = unknown,
    RecordT extends Record<PropertyKey, Validator<ValueT>> = Record<PropertyKey, Validator<ValueT>>,
    Result extends Record<PropertyKey, Validatable> = Record<PropertyKey, Validatable>,
    ValidatableT extends Validatable = Validatable
> implements
    Value<ValueT>,
    Validatable,
    Validatables<Result>,
    Message<MessageT>
{

    readonly validatables : Result;
    readonly valid : boolean;
    readonly validatable : ValidatableT;
    readonly message : MessageT;
    readonly messages : Result;

    constructor(
        readonly value: ValueT,
        public validators : RecordT,
        public handler : Function<[ValueT, RecordT], Result>,
        public validation : Function<[Result], ValidatableT>,
        message : Function<[Result], MessageT>,
    ) {

        this.validatables = this.handler(value, this.validators);
        this.messages = this.validatables;

        this.validatable = this.validation(this.validatables);
        this.valid = this.validatable.valid;
        this.message = message(this.validatables);
    }
}
