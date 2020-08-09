import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Validatables from "./validatables/validatables";
import Message from "@dikac/t-message/message";
export default class ValueCallback<ValueT = unknown, MessageT = unknown, RecordT extends Record<PropertyKey, Validator<ValueT>> = Record<PropertyKey, Validator<ValueT>>, Result extends Record<PropertyKey, Validatable> = Record<PropertyKey, Validatable>, ValidatableT extends Validatable = Validatable> implements Value<ValueT>, Validatable, Validatables<Result>, Message<MessageT> {
    readonly value: ValueT;
    validators: RecordT;
    handler: Function<[ValueT, RecordT], Result>;
    validation: Function<[Result], ValidatableT>;
    readonly validatables: Result;
    readonly valid: boolean;
    readonly validatable: ValidatableT;
    readonly message: MessageT;
    readonly messages: Result;
    constructor(value: ValueT, validators: RecordT, handler: Function<[ValueT, RecordT], Result>, validation: Function<[Result], ValidatableT>, message: Function<[Result], MessageT>);
}
