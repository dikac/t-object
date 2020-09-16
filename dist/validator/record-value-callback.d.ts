import Validator from "@dikac/t-validator/validator";
import InferBase from "@dikac/t-validator/base/infer";
import InferType from "@dikac/t-validator/type/infer";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableRecordCallback from "../validatable/record-value-callback";
import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Replace from "@dikac/t-validatable/boolean/replace";
import RecordValue from "./record-value";
export default class RecordValueCallback<ValidatorType extends Validator = Validator, Result extends Record<PropertyKey, Instance> = Record<PropertyKey, Instance>, ValidatableType extends Validatable = Validatable, Message = unknown> implements RecordValue<ValidatorType, Result, ValidatableType, Message> {
    validator: ValidatorType;
    handler: (record: Record<PropertyKey, InferBase<ValidatorType>>, validator: ValidatorType) => Result;
    validation: (result: Result) => ValidatableType;
    message: (result: Result) => Message;
    constructor(validator: ValidatorType, handler: (record: Record<PropertyKey, InferBase<ValidatorType>>, validator: ValidatorType) => Result, validation: (result: Result) => ValidatableType, message: (result: Result) => Message);
    validate<Argument extends Record<PropertyKey, InferType<ValidatorType>>>(argument: Argument): Replace<ValidatableRecordCallback<Message, Argument, ValidatorType, Result, ValidatableType>, true>;
    validate<Argument extends Record<PropertyKey, InferBase<ValidatorType>>>(argument: Argument): Return<Record<PropertyKey, InferBase<ValidatorType>>, Argument, Record<PropertyKey, InferType<ValidatorType>>, ValidatableRecordCallback<Message, Argument, ValidatorType, Result, ValidatableType>>;
}
