import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableRecordCallback from "../validatable/record-value-callback";
import ValidatableRecord from "../validatable/record-value";
import Return from "@dikac/t-validator/validatable/simple";
import Replace from "@dikac/t-validatable/boolean/replace";
import RecordKey from "./record-key";
import Instance from "@dikac/t-validator/validatable/validatable";
import InferBase from "@dikac/t-validator/base/infer";
import InferType from "@dikac/t-validator/type/infer";

export default class RecordKeyCallback<
    ValidatorType extends Validator<PropertyKey> = Validator<PropertyKey>,
    Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
> implements RecordKey< ValidatorType, Result, ValidatableType, MessageType> {

    constructor(
        public validator : ValidatorType,
        public handler : (base:Record<InferBase<ValidatorType>, any>, validator:ValidatorType)=>Result,
        public validation : (result:Result)=>ValidatableType,
        public message : (result:Result)=>MessageType
    ) {
    }

    validate<Argument extends Record<InferType<ValidatorType>, any>>(
        argument: Argument
    ) : Replace<ValidatableRecord<MessageType, Argument, ValidatorType, Result, ValidatableType>, true>

    validate<Argument extends Record<InferBase<ValidatorType>, any>>(
        argument: Argument
    ) : Return<Record<InferBase<ValidatorType>, any>, Argument, Record<InferBase<ValidatorType>, any>, ValidatableRecord<MessageType, Record<InferBase<ValidatorType>, any>, ValidatorType, Result, ValidatableType>>

    validate<Argument extends Record<InferBase<ValidatorType>, any>>(
        argument: Argument
    ) {

        return new ValidatableRecordCallback(argument, this.validator, this.handler, this.validation, this.message) as
            Return<Record<InferBase<ValidatorType>, any>, Argument, Record<InferBase<ValidatorType>, any>, ValidatableRecord<MessageType, Record<InferBase<ValidatorType>, any>, ValidatorType, Result, ValidatableType>>;
    }
}



