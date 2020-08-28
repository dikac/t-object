import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "@dikac/t-validator/validatable/infer";
import { Interface } from "./record-value-callback";
export default function RecordValue<ValidatorType extends Validator = Validator, ValidatableType extends Validatable = Validatable, MessageType = unknown>(validator: ValidatorType, validation: (record: Record<PropertyKey, ReturnInfer<ValidatorType>>) => ValidatableType, message: (record: Record<PropertyKey, ReturnInfer<ValidatorType>>) => MessageType): Interface<ValidatorType, Record<PropertyKey, ReturnInfer<ValidatorType>>, ValidatableType, MessageType>;
