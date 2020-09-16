import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableRecordCallback from "../validatable/record-value-callback";
import Return from "@dikac/t-validator/validatable/simple";
import Replace from "@dikac/t-validatable/boolean/replace";
import RecordKey from "./record-key";
export default class RecordCallbackClass<Base extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>, Type extends Base = Base, ValidatorType extends Validator<keyof Base, keyof Type> = Validator<keyof Base, keyof Type>, Result extends Record<PropertyKey, Validatable> = Record<PropertyKey, Validatable>, ValidatableType extends Validatable = Validatable, MessageType = unknown> implements RecordKey<Base, Type, ValidatorType, Result, ValidatableType, MessageType> {
    validator: ValidatorType;
    handler: (base: Base, validator: ValidatorType) => Result;
    validation: (result: Result) => ValidatableType;
    message: (result: Result) => MessageType;
    constructor(validator: ValidatorType, handler: (base: Base, validator: ValidatorType) => Result, validation: (result: Result) => ValidatableType, message: (result: Result) => MessageType);
    validate<Argument extends Type>(argument: Argument): Replace<ValidatableRecordCallback<MessageType, Argument, ValidatorType, Result, ValidatableType>, true>;
    validate<Argument extends Base>(argument: Argument): Return<Base, Argument, Type, ValidatableRecordCallback<MessageType, Base, ValidatorType, Result, ValidatableType>>;
}
