import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import ReturnInfer from "@dikac/t-validator/validatable/infer";
import { Interface } from "./record-value-callback";
export default function RecordValue<ValidatorT extends Validator = Validator, ValidatableT extends Validatable = Validatable, MessageT = unknown>(validator: ValidatorT, validation: Function<[Record<PropertyKey, ReturnInfer<ValidatorT>>], ValidatableT>, message: Function<[Record<PropertyKey, ReturnInfer<ValidatorT>>], MessageT>): Interface<ValidatorT, Record<PropertyKey, ReturnInfer<ValidatorT>>, ValidatableT, MessageT>;
