import Validator from "@dikac/t-validator/validator";
import SimpleValidator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import ValidatableRecordCallback from "../validatable/record-value-callback";
import Return from "@dikac/t-validator/validatable/simple";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import Validation from "@dikac/t-validatable/validation/validation";
import Replace from "@dikac/t-validatable/boolean/replace";
import RecordKey from "./record-key";

export default class RecordCallbackClass<
    Base extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
    Type extends Base = Base,
    ValidatorType extends Validator<keyof Base, keyof Type> = Validator<keyof Base, keyof Type>,
    Result extends Record<PropertyKey, Validatable> = Record<PropertyKey, Validatable>,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
> implements RecordKey<Base, Type, ValidatorType, Result, ValidatableType, MessageType> {

    constructor(
        public validator : ValidatorType,
        public handler : (base:Base, validator:ValidatorType)=>Result,
        public validation : (result:Result)=>ValidatableType,
        public message : (result:Result)=>MessageType
    ) {
    }

    validate<Argument extends Type>(
        argument: Argument
    ) : Replace<ValidatableRecordCallback<MessageType, Argument, ValidatorType, Result, ValidatableType>, true>

    validate<Argument extends Base>(
        argument: Argument
    ) : Return<Base, Argument, Type, ValidatableRecordCallback<MessageType, Base, ValidatorType, Result, ValidatableType>>

    validate<Argument extends Base>(
        argument: Argument
    ) {

        return new ValidatableRecordCallback(argument, this.validator, this.handler, this.validation, this.message) as
            Return<Base, Argument, Type, ValidatableRecordCallback<MessageType, Base, ValidatorType, Result, ValidatableType>>;
    }
}



