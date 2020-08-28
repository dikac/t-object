import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import RecordParameter from "../validator/base/record/infer";
import RecordBase from "../validator/base/record/infer";
import Instance from "@dikac/t-validator/validatable/validatable";
import Map from "./map";
export default class MapCallback<MessageT = unknown, ValidatorsT extends Record<any, Validator> = Record<any, Validator>, Result extends Record<any, Instance> = Record<any, Instance>, ValidatableT extends Validatable = Validatable, ValueT extends RecordBase<ValidatorsT> = RecordBase<ValidatorsT>> implements Map<MessageT, ValidatorsT, Result, ValidatableT, ValueT> {
    value: ValueT;
    validators: ValidatorsT;
    validatables: Result;
    valid: boolean;
    validatable: ValidatableT;
    private messageFactory;
    messages: Result;
    constructor(value: ValueT, validators: ValidatorsT, map: (values: RecordParameter<ValidatorsT>, validators: ValidatorsT) => Result, validation: (result: Result) => ValidatableT, message: (result: Result) => MessageT);
    get message(): MessageT;
}
