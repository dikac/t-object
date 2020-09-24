import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableRecord from "../validatable/record-value";
import Return from "@dikac/t-validator/validatable/simple";
import Replace from "@dikac/t-validatable/boolean/replace";
import RecordKey from "./record-key";
import ValidatorValidatable from "@dikac/t-validator/validatable/validatable";
import InferBase from "@dikac/t-validator/base/infer";
import InferType from "@dikac/t-validator/type/infer";
export default class RecordKeyCallback<ValidatorType extends Validator<PropertyKey> = Validator<PropertyKey>, Result extends Partial<Record<PropertyKey, ValidatorValidatable>> = Partial<Record<PropertyKey, ValidatorValidatable>>, ValidatableType extends Validatable = Validatable, MessageType = unknown> implements RecordKey<ValidatorType, Result, ValidatableType, MessageType> {
    validator: ValidatorType;
    handler: (base: Record<InferBase<ValidatorType>, any>, validator: ValidatorType) => Result;
    validation: (result: Result) => ValidatableType;
    message: (result: Result) => MessageType;
    constructor(validator: ValidatorType, handler: (base: Record<InferBase<ValidatorType>, any>, validator: ValidatorType) => Result, validation: (result: Result) => ValidatableType, message: (result: Result) => MessageType);
    validate<Argument extends Record<InferType<ValidatorType>, any>>(argument: Argument): Replace<ValidatableRecord<MessageType, Argument, ValidatorType, Result, ValidatableType>, true>;
    validate<Argument extends Record<InferBase<ValidatorType>, any>>(argument: Argument): Return<Record<InferBase<ValidatorType>, any>, Argument, Record<InferBase<ValidatorType>, any>, ValidatableRecord<MessageType, Record<InferBase<ValidatorType>, any>, ValidatorType, Result, ValidatableType>>;
}
