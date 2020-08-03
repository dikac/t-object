import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Validatables from "./validatables/validatables";
import Message from "@dikac/t-message/message";
import Record from "../record";
export default class ValueCallback<ValueT = unknown, MessageT = unknown, RecordT extends Record<Validator<ValueT>> = Record<Validator<ValueT>>, Result extends Partial<Record<Validatable>> = Partial<Record<Validatable>>, ValidatableT extends Validatable = Validatable> implements Value<ValueT>, Validatable, Validatables<Result>, Message<MessageT> {
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
