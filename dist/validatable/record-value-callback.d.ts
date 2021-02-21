import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import { O } from "ts-toolbelt";
import RecordValue from "./record-value";
export default class RecordValueCallback<MessageType = unknown, ValueType extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>, ValidatorType extends Validator<O.UnionOf<ValueType>> = Validator<O.UnionOf<ValueType>>, Result extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>, ValidatableType extends Validatable = Validatable> implements RecordValue<MessageType, ValueType, ValidatorType, Result, ValidatableType> {
    #private;
    readonly value: ValueType;
    readonly validator: ValidatorType;
    readonly map: (value: ValueType, validators: ValidatorType) => Result;
    readonly validation: (result: Result) => ValidatableType;
    readonly validatable: ValidatableType;
    readonly validatables: Result;
    constructor(value: ValueType, validator: ValidatorType, map: (value: ValueType, validators: ValidatorType) => Result, validation: (result: Result) => ValidatableType, message: (result: Result) => MessageType);
    get messages(): Result;
    get valid(): boolean;
    get message(): MessageType;
}
