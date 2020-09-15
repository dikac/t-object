import Validator from "@dikac/t-validator/validator";
import ValidatorValidatable from "@dikac/t-validator/validatable/validatable";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "./value";
export default class ValueCallback<ValueType = unknown, MessageType = unknown, RecordType extends Record<PropertyKey, Validator<ValueType>> = Record<PropertyKey, Validator<ValueType>>, Result extends Record<PropertyKey, ValidatorValidatable> = Record<PropertyKey, ValidatorValidatable>, ValidatableType extends Validatable = Validatable> implements Value<ValueType, MessageType, RecordType, Result, ValidatableType> {
    readonly value: ValueType;
    readonly validators: RecordType;
    readonly map: (value: ValueType, validator: RecordType) => Result;
    readonly validation: (result: Result) => ValidatableType;
    readonly messageFactory: (result: Result) => MessageType;
    constructor(value: ValueType, validators: RecordType, map: (value: ValueType, validator: RecordType) => Result, validation: (result: Result) => ValidatableType, messageFactory: (result: Result) => MessageType);
    get valid(): boolean;
    get validatable(): ValidatableType;
    get messages(): Result;
    get validatables(): Result;
    get message(): MessageType;
}
