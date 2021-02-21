import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import RecordParameter from "../validator/base/record/infer";
import RecordBase from "../validator/base/record/infer";
import Instance from "@dikac/t-validator/validatable/validatable";
import Map from "./map";
export default class MapCallback<MessageType = unknown, ValidatorsType extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>, Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>, ValidatableType extends Validatable = Validatable, ValueType extends RecordBase<ValidatorsType> = RecordBase<ValidatorsType>> implements Map<MessageType, ValidatorsType, Result, ValidatableType, ValueType> {
    #private;
    validators: ValidatorsType;
    private map;
    private validation;
    readonly validatable: ValidatableType;
    readonly validatables: Result;
    constructor(value: ValueType, validators: ValidatorsType, map: (values: RecordParameter<ValidatorsType>, validators: ValidatorsType) => Result, validation: (result: Result) => ValidatableType, message: (result: Result) => MessageType);
    get valid(): boolean;
    get messages(): Result;
    get value(): ValueType;
    get message(): MessageType;
}
