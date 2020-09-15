import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Validatables from "./validatables/validatables";
import Message from "@dikac/t-message/message";
import { O } from "ts-toolbelt";
export default class RecordCallback<MessageType = unknown, ValueType extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>, ValidatorType extends Validator<O.UnionOf<ValueType>> = Validator<O.UnionOf<ValueType>>, Result extends Record<PropertyKey, Validatable> = Record<PropertyKey, Validatable>, ValidatableType extends Validatable = Validatable> implements Value<ValueType>, Validatable, Validatables<Result>, Message<MessageType> {
    readonly value: ValueType;
    readonly validator: ValidatorType;
    readonly validatables: Result;
    readonly valid: boolean;
    readonly validatable: ValidatableType;
    readonly messages: Result;
    private messageFactory;
    constructor(value: ValueType, validator: ValidatorType, map: (value: ValueType, validators: ValidatorType) => Result, validation: (result: Result) => ValidatableType, message: (result: Result) => MessageType);
    get message(): MessageType;
}
