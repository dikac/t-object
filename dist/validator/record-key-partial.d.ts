import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "@dikac/t-validator/validatable/infer";
import Union from "../union";
import RecordKey from "./record-key";
export default function RecordKeyPartial<ValidatorType extends Validator = Validator, ValidatableType extends Validatable = Validatable, MessageType = unknown>(validator: ValidatorType, validation: (partial: Union<Record<PropertyKey, ReturnInfer<ValidatorType>>>) => ValidatableType, message: (partial: Union<Record<PropertyKey, ReturnInfer<ValidatorType>>>) => MessageType): RecordKey<ValidatorType, Union<Record<PropertyKey, ReturnInfer<ValidatorType>>>, ValidatableType, MessageType>;
