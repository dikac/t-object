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
    ValidatorT extends Validator = Validator,
    Result extends Record<PropertyKey, Instance> = Record<PropertyKey, Instance>,
    ValidatableT extends Validatable = Validatable,
    MessageT = unknown,
> implements Interface<ValidatorT, Result, ValidatableT, MessageT> {
    constructor(
        public validator : ValidatorT,
        public handler : (record:Record<PropertyKey, InferBase<ValidatorT>>, validator : ValidatorT)=>Result,
        public validation : (result:Result)=>ValidatableT,
        public message : (result:Result)=>MessageT
    ) {
    }

    validate<Argument extends Record<PropertyKey, InferType<ValidatorT>>>(argument: Argument)
        : Replace<ValidatableRecordCallback<MessageT, Argument, ValidatorT, Result, ValidatableT>, true>

    validate<Argument extends Record<PropertyKey, InferBase<ValidatorT>>>(argument: Argument)
        : Return<Record<PropertyKey, InferBase<ValidatorT>>, Argument, Record<PropertyKey, InferType<ValidatorT>>, ValidatableRecordCallback<MessageT, Argument, ValidatorT, Result, ValidatableT>>

    validate<Argument extends Record<PropertyKey, InferBase<ValidatorT>>>(argument: Argument) {

        return <Replace<ValidatableRecordCallback<MessageT, Argument, ValidatorT, Result, ValidatableT>, true>>
            new ValidatableRecordCallback(argument, this.validator, this.handler, this.validation, this.message);
    }
}



