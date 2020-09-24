import Validator from "@dikac/t-validator/validator";
import SimpleValidator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import Validation from "@dikac/t-validatable/validation/validation";
import Instance from "@dikac/t-validator/validatable/validatable";
import InferBase from "@dikac/t-validator/base/infer";
import ValidatableRecord from "../validatable/record-value";
declare type RecordValue<ValidatorTemplate extends Validator<PropertyKey>, Result extends Partial<Record<PropertyKey, Instance>>, ValidatableTemplate extends Validatable, MessageTemplate> = SimpleValidator<Record<InferBase<ValidatorTemplate>, any>, Record<InferBase<ValidatorTemplate>, any>, //        Record<InferType<ValidatorTemplate>, any>,
ValidatableRecord<MessageTemplate, Record<PropertyKey, InferBase<ValidatorTemplate>>, ValidatorTemplate, Result, ValidatableTemplate>> & ValidatorContainer<ValidatorTemplate> & Message<(result: Result) => MessageTemplate> & Validation<(result: Result) => ValidatableTemplate>;
export default RecordValue;
