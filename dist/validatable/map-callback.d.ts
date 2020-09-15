import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import RecordParameter from "../validator/base/record/infer";
import RecordBase from "../validator/base/record/infer";
import Instance from "@dikac/t-validator/validatable/validatable";
import Map from "./map";
export default class MapCallback<MessageType = unknown, ValidatorsType extends Record<any, Validator> = Record<any, Validator>, Result extends Record<any, Instance> = Record<any, Instance>, ValidatableType extends Validatable = Validatable, ValueType extends RecordBase<ValidatorsType> = RecordBase<ValidatorsType>> implements Map<MessageType, ValidatorsType, Result, ValidatableType, ValueType> {
    #private;
    validators: ValidatorsType;
    private map;
    private validation;
    private messageFactory;
    constructor(value: ValueType, validators: ValidatorsType, map: (values: RecordParameter<ValidatorsType>, validators: ValidatorsType) => Result, validation: (result: Result) => ValidatableType, message: (result: Result) => MessageType);
    get valid(): boolean;
    get validatable(): ValidatableType;
    get messages(): Result;
    get validatables(): Result;
    get value(): ValueType;
    get message(): MessageType;
}
