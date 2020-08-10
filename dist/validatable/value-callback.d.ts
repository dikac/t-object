import Validator from "@dikac/t-validator/validator";
import ValidatorValidatable from "@dikac/t-validator/validatable/validatable";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Validatables from "./validatables/validatables";
import Message from "@dikac/t-message/message";
import Messages from "../message/messages/messages";
export declare type Interface<ValueT, MessageT, RecordT extends Record<PropertyKey, Validator<ValueT>>, Result extends Record<PropertyKey, ValidatorValidatable>, ValidatableT extends Validatable> = Readonly<Value<ValueT>> & Readonly<Validatable<boolean>> & Readonly<Validatables<Result>> & Readonly<Messages<Result>> & Readonly<Message<MessageT>>;
export default class ValueCallback<ValueT = unknown, MessageT = unknown, RecordT extends Record<PropertyKey, Validator<ValueT>> = Record<PropertyKey, Validator<ValueT>>, Result extends Record<PropertyKey, ValidatorValidatable> = Record<PropertyKey, ValidatorValidatable>, ValidatableT extends Validatable = Validatable> implements Interface<ValueT, MessageT, RecordT, Result, ValidatableT> {
    readonly value: ValueT;
    readonly validators: RecordT;
    readonly map: Function<[ValueT, RecordT], Result>;
    readonly validation: Function<[Result], ValidatableT>;
    readonly messageFactory: Function<[Result], MessageT>;
    constructor(value: ValueT, validators: RecordT, map: Function<[ValueT, RecordT], Result>, validation: Function<[Result], ValidatableT>, messageFactory: Function<[Result], MessageT>);
    get valid(): boolean;
    get validatable(): ValidatableT;
    get messages(): Result;
    get validatables(): Result;
    get message(): MessageT;
}
