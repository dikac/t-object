import SimpleValidator from "@dikac/t-validator/simple";
import Validator from "@dikac/t-validator/validator";
import InferBase from "@dikac/t-validator/base/infer";
import InferType from "@dikac/t-validator/type/infer";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Validation from "@dikac/t-validatable/validation/validation";
import Message from "@dikac/t-message/message";
import ValidatableRecordCallback from "../validatable/record-value-callback";
import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Replace from "@dikac/t-validatable/boolean/replace";

export type Interface<
    ValidatorTemplate extends Validator,
    Result extends Record<PropertyKey, Instance>,
    ValidatableTemplate extends Validatable ,
    MessageTemplate,
> =
    SimpleValidator<
        Record<PropertyKey, InferBase<ValidatorTemplate>>,
        Record<PropertyKey, InferType<ValidatorTemplate>>,
        ValidatableRecordCallback<MessageTemplate, Record<PropertyKey, InferBase<ValidatorTemplate>>, ValidatorTemplate, Result, ValidatableTemplate>> &
    ValidatorContainer<ValidatorTemplate> &
    Message<(result:Result)=>MessageTemplate> &
    Validation<(result:Result)=>ValidatableTemplate>

export default class RecordValueCallback<
    ValidatorType extends Validator = Validator,
    Result extends Record<PropertyKey, Instance> = Record<PropertyKey, Instance>,
    ValidatableType extends Validatable = Validatable,
    Message = unknown,
> implements Interface<ValidatorType, Result, ValidatableType, Message> {
    constructor(
        public validator : ValidatorType,
        public handler : (record:Record<PropertyKey, InferBase<ValidatorType>>, validator : ValidatorType)=>Result,
        public validation : (result:Result)=>ValidatableType,
        public message : (result:Result)=>Message
    ) {
    }

    validate<Argument extends Record<PropertyKey, InferType<ValidatorType>>>(argument: Argument)
        : Replace<ValidatableRecordCallback<Message, Argument, ValidatorType, Result, ValidatableType>, true>

    validate<Argument extends Record<PropertyKey, InferBase<ValidatorType>>>(argument: Argument)
        : Return<Record<PropertyKey, InferBase<ValidatorType>>, Argument, Record<PropertyKey, InferType<ValidatorType>>, ValidatableRecordCallback<Message, Argument, ValidatorType, Result, ValidatableType>>

    validate<Argument extends Record<PropertyKey, InferBase<ValidatorType>>>(argument: Argument) {

        return <Replace<ValidatableRecordCallback<Message, Argument, ValidatorType, Result, ValidatableType>, true>>
            new ValidatableRecordCallback(argument, this.validator, this.handler, this.validation, this.message);
    }
}



