import Validator from "@dikac/t-validator/validator";
import SimpleValidator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import ValidatableRecordCallback from "../validatable/record-value-callback";
import Return from "@dikac/t-validator/validatable/simple";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import Validation from "@dikac/t-validatable/validation/validation";
import Replace from "@dikac/t-validatable/boolean/replace";
export declare type Interface<Base extends Record<PropertyKey, unknown>, Type extends Base, ValidatorType extends Validator<keyof Base, keyof Type>, Result extends Record<PropertyKey, Validatable>, ValidatableType extends Validatable, MessageType> = SimpleValidator<Base, Type, ValidatableRecordCallback<MessageType, Base, ValidatorType, Result, ValidatableType>> & ValidatorContainer<ValidatorType> & Message<(result: Result) => MessageType> & Validation<(result: Result) => ValidatableType>;
export default class RecordCallbackClass<Base extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>, Type extends Base = Base, ValidatorType extends Validator<keyof Base, keyof Type> = Validator<keyof Base, keyof Type>, Result extends Record<PropertyKey, Validatable> = Record<PropertyKey, Validatable>, ValidatableType extends Validatable = Validatable, MessageType = unknown> implements Interface<Base, Type, ValidatorType, Result, ValidatableType, MessageType> {
    validator: ValidatorType;
    handler: (base: Base, validator: ValidatorType) => Result;
    validation: (result: Result) => ValidatableType;
    message: (result: Result) => MessageType;
    constructor(validator: ValidatorType, handler: (base: Base, validator: ValidatorType) => Result, validation: (result: Result) => ValidatableType, message: (result: Result) => MessageType);
    validate<Argument extends Type>(argument: Argument): Replace<ValidatableRecordCallback<MessageType, Argument, ValidatorType, Result, ValidatableType>, true>;
    validate<Argument extends Base>(argument: Argument): Return<Base, Argument, Type, ValidatableRecordCallback<MessageType, Base, ValidatorType, Result, ValidatableType>>;
}
