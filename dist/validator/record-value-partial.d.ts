import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import ReturnInfer from "@dikac/t-validator/validatable/infer";
import { Interface } from "./record-value-callback";
import Union from "../union";
export default function RecordValuePartial<ValidatorT extends Validator = Validator, ValidatableT extends Validatable = Validatable, MessageT = unknown>(validator: ValidatorT, validation: Function<[Record<any, ReturnInfer<ValidatorT>>], ValidatableT>, message: Function<[Record<any, ReturnInfer<ValidatorT>>], MessageT>): Interface<ValidatorT, Union<Record<any, ReturnInfer<ValidatorT>>>, ValidatableT, MessageT>;
