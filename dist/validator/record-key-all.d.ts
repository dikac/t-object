import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "@dikac/t-validator/validatable/infer";
import RecordKey from "./record-key";
export default function RecordKeyAll<ValidatorType extends Validator = Validator, ValidatableType extends Validatable = Validatable, MessageType = unknown>(validator: ValidatorType, validation: (record: Record<PropertyKey, ReturnInfer<ValidatorType>>) => ValidatableType, message: (record: Record<PropertyKey, ReturnInfer<ValidatorType>>) => MessageType): RecordKey<ValidatorType, Record<PropertyKey, ReturnInfer<ValidatorType>>, ValidatableType, MessageType>;
