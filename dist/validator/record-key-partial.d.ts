import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "@dikac/t-validator/validatable/infer";
import RecordKey from "./record-key";
export default function RecordKeyPartial<ValidatorType extends Validator = Validator, ValidatableType extends Validatable = Validatable, MessageType = unknown>(validator: ValidatorType, validation: (partial: Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>) => ValidatableType, message: (partial: Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>) => MessageType): RecordKey<ValidatorType, Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>, ValidatableType, MessageType>;
