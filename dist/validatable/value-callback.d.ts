import Validator from "@dikac/t-validator/validator";
import ValidatorValidatable from "@dikac/t-validator/validatable/validatable";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "./value";
export default class ValueCallback<ValueT = unknown, MessageT = unknown, RecordT extends Record<PropertyKey, Validator<ValueT>> = Record<PropertyKey, Validator<ValueT>>, Result extends Record<PropertyKey, ValidatorValidatable> = Record<PropertyKey, ValidatorValidatable>, ValidatableT extends Validatable = Validatable> implements Value<ValueT, MessageT, RecordT, Result, ValidatableT> {
    readonly value: ValueT;
    readonly validators: RecordT;
    readonly map: (value: ValueT, validator: RecordT) => Result;
    readonly validation: (result: Result) => ValidatableT;
    readonly messageFactory: (result: Result) => MessageT;
    constructor(value: ValueT, validators: RecordT, map: (value: ValueT, validator: RecordT) => Result, validation: (result: Result) => ValidatableT, messageFactory: (result: Result) => MessageT);
    get valid(): boolean;
    get validatable(): ValidatableT;
    get messages(): Result;
    get validatables(): Result;
    get message(): MessageT;
}
